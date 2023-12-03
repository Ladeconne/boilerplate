import { Application } from 'express';
import { initApp } from '../app';
import { Server } from 'http';

//@ts-expect-error need to initiate with current architecture
let app: Application = null;
let server: Server;

export const getApp = async () => {
  if (!app) {
    const port = process.env.PORT || '3000';
    app = await initApp();
    if (!app) return;
    server = app.listen(port, () => {
      console.log('Server listen on port:', port);
    });
  }
  return { app, server };
};
