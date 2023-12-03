import dotenv from 'dotenv';
dotenv.config();
import express, { Application } from 'express';
import cors from 'cors';
import allRoutes from '@/routes';
import { errorHandler } from '@/middelwares';
import { createServer } from 'http';

const app: Application = express();

app.disable('x-powered-by');

const corsOption = {
  origin: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  credentials: true,
  exposedHeaders: ['x-auth-token'],
};

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  next();
});
app.use(express.json({ limit: '10mb' })); // for parsing application/json
app.use(cors(corsOption));

app.use('/', allRoutes);

app.use(errorHandler);

export const initApp = async (): Promise<Application> => {
  return app;
};

export const api = app;
