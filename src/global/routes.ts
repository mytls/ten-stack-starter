import homeRoute from "../components/home/home.routes";
import { Express } from "express";
import { TRoute } from "../..";
import { _attacher } from "./_attacher";

const routes: TRoute[] = [{ path: "/", route: homeRoute }];

export default (app: Express) => {
  return routes.map((item: TRoute) => {
    return app.use(item.path, _attacher(item.route));
  });
};
