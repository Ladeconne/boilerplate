export class CustomError extends Error {
  message: string;

  status: number;

  code: string | undefined;

  constructor(message: string, status = 500, code?: string) {
    super(message);
    this.message = message;
    this.status = status;
    this.code = code;
  }
}
