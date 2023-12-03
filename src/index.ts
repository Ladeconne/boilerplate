import dotenv from 'dotenv';
dotenv.config();
import { createServer } from 'http';
import { initApp, api } from './app';

export const startServer = async () => {
  try {
    const app = await initApp();
    const port = process.env.PORT || '3000';
    const httpServer = createServer(app);

    httpServer.listen(port, () => {
      console.log('Server listen on port:', port);
    });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

(async () => {
  await startServer();
})();

export const app = api;
