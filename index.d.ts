/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response, Router } from "express";

export interface IErrorParams {
  type: string;
  status: number;
  title?: string;
  message?: string;
  payload?: any;
}
declare module "express" {
  export interface Request {
    [key: string]: any;
  }

  export interface Response {
    [key: string]: any;
  }
}

export interface Next {
  (err: IErrorParams): any;
}

export type TRoute = { path: string; route: Router };

export type TMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => NextFunction | void;
