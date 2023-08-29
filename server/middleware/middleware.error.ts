import { NextFunction, Request, Response } from "express";

const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const status = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(status);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? undefined : err.stack,
  });
};

const notFound = (req: Request, res: Response, next: NextFunction) => {
  const error = new Error(`Not found | ${req.originalUrl}`);
  res.status(404);
  next(error);
};

export { errorHandler, notFound };
