import 'reflect-metadata';
import { createApp } from './config/app.config';
import dotenv from 'dotenv';

// Config environment variables
dotenv.config();
// Define the port to serve the application
const port = process.env.SERVER_PORT || 3001;
// Create app and initialise server
(async () => {
  const server = await createApp();
  server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
})();
