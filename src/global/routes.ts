/* eslint-disable @typescript-eslint/no-unused-vars */
import { Express, Request, Response } from "express";
import { IErrorParams, Next, TRoute } from "../..";
import _attacher from "./_attacher";

export default (app: Express, routes: TRoute[]) =>
  routes.map((item: TRoute) => {
    return app.use(
      item.path,
      _attacher(item.route),
      (err: IErrorParams, _req: Request, res: Response, _next: Next) => {
        return res.json(err).status(err.status);
      }
    );
  });
