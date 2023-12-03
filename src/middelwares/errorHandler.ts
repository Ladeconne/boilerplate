import { Request, Response, NextFunction } from 'express';
import { CustomError } from '@/errors';

export const errorHandler = (
  err: CustomError | TypeError,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction
) => {
  let customError = err;

  if (!(err instanceof CustomError)) {
    customError = new CustomError(
      'Oh no, this is embarrasing. We are having troubles my friend'
    );
  }
  return res.status((customError as CustomError).status).json(customError);
};
