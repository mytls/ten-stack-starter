import { NextFunction, Request, Response, Router } from "express";

export type TRoute = { path: string; route: Router };

export type TMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => NextFunction | void;
