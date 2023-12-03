import { NextFunction, Request, Response } from 'express';
import { logInfo } from '@/helpers';
import { APIResponse } from '@/types';
import { CustomError } from '@/errors';

//@ts-expect-error: Find the right type for callback
export const runAsyncWrapper = (callback) => {
  return (req: Request, res: Response<APIResponse>, next: NextFunction) => {
    callback(req, res, next).catch((e: CustomError) => {
      console.log('ERROR IN WRAPPER = ', e);
      logInfo(`Error: ${e.message} on path: ${req.path}}`);
      return res.status(e.status || 500).send({
        message: e.message,
        code: e.code,
        data: null,
      });
    });
  };
};
