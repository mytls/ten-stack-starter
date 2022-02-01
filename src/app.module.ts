/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Express } from "express";
import { TMiddleware } from "..";

//? Location of decorators

export const Needs = ({
  app,
  routes,
  middlewares,
}: {
  app: Express;
  routes: (app: Express) => Express[];
  middlewares?: TMiddleware[];
}) => {
  return (_ctr: any) => {
    routes(app);
    middlewares?.map((middleware: TMiddleware) => {
      app.use(middleware);
      return null;
    });
  };
};
