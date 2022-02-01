import { NextFunction, Request, Response, Router } from "express";

declare module "express" {
  export interface Request {
    prop: string;
  }

  export interface Response {
    prop: string;
  }
}

export type TRoute = { path: string; route: Router };

export type TMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => NextFunction | void;
