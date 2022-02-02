import { Express } from "express";
import { TRoute } from "../..";
import _attacher from "./_attacher";

export default (app: Express, routes: TRoute[]) =>
  routes.map((item: TRoute) => {
    return app.use(item.path, _attacher(item.route));
  });
