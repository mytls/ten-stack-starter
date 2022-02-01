/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Express, NextFunction, Request, Response } from "express";
import { TMiddleware } from "../..";
import { _attacher } from "./_attacher";

//? Location of decorators

export const Needs =
  ({
    app,
    routes,
    middlewares,
  }: {
    app: Express;
    routes: (app: Express) => Express[];
    middlewares?: TMiddleware[];
  }) =>
  (_ctr: any) => {
    middlewares?.map((middleware: TMiddleware) =>
      app.use(_attacher(middleware))
    );
    routes(app);
  };
