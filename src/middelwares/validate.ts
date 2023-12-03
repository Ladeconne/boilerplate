import yup from 'yup';
import { Response, Request, NextFunction } from 'express';
import { APIResponse } from '@/types';

export const validate =
  (schema: yup.AnySchema) =>
  async (req: Request, res: Response<APIResponse>, next: NextFunction) => {
    try {
      const values = await schema.validate(
        {
          body: req.body,
          query: req.query,
          params: req.params,
        },
        { abortEarly: false, recursive: true }
      );

      req.body = values.body;
      req.query = values.query;
      req.params = values.params;

      return next();
    } catch (err: any) {
      if (err.name === 'ValidationError') {
        const errors: yup.ValidationError = err as yup.ValidationError;
        console.log('ERROR IN VALIDATION = ', JSON.stringify(errors.errors));
        return res.status(422).json({ message: err.name, data: errors.errors });
      }
      return res.status(500).json({ message: 'Validation error', data: null });
    }
  };
