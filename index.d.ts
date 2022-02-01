/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response, Router } from "express";

declare module "express" {
  export interface Request {
    [key: string]: any;
  }

  export interface Response {
    [key: string]: any;
  }
}

export type TRoute = { path: string; route: Router };

export type TMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => NextFunction | void;
