import { Container } from 'inversify';
import { InversifyExpressServer, getRouteInfo } from 'inversify-express-utils';
import { bindings } from './inversify.config';
import { globalMiddlewares } from '../middlewares/globalMiddlewares'; 
import * as express from 'express';

// Define app's root path
const root = '/api/v1';

/**
 * Creates and return the express application
 */
export async function createApp(){
  // Create a new inversify container
  const container = new Container();
  // Load all bindings
  await container.loadAsync(bindings);
  // Create the inversify server wrapper passing the container
  const server = new InversifyExpressServer(
    container, null, {rootPath: root}, null, null
  );
  // Apply custom config to application
  server.setConfig((app) => {
    // Add CORS
    app.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Headers', '*');
      res.header('Access-Control-Allow-Methods', '*')
      next();
    });
    // Apply global middlewares to application
    app.use(globalMiddlewares); 
    // Apply route for saved images
    app.use('/uploads/images', express.static('uploads/images'));
    // Add frontend build path
    app.use(express.static('src/frontend/build'));

    // Define route not found error
    app.use('*', (req, res, next) => {
      (req as any).bbb = req.params[0];
      next();
    });

  });
  //Set Route Not Found error for unregistered routes
  server.setErrorConfig((app) => {
    // Define route not found error
    app.use('*', (req, res, next) => {      
      console.log('path: ',`${process.env.SERVER_HOST}?p=${(req as any).bbb}`);
      res.redirect(`${process.env.SERVER_HOST}?p=${(req as any).bbb}`);
    });
  });

  return server.build();
};