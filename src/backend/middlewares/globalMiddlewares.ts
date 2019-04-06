import morgan from 'morgan';
import bodyParser from 'body-parser';

/**
 * Creates an array with all the app's global middlewares
 */
export const globalMiddlewares = [
  // Logs requests to console
  morgan('dev'),
  // Parses the request body to json format
  bodyParser.json(),
  // Parses the encoded url
  bodyParser.urlencoded({extended: true})
]