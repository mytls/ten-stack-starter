import { TRoute } from "..";
import homeRoute from "./components/home/home.routes";
import { Express } from "express";

const routes: TRoute[] = [{ path: "/", route: homeRoute }];

export default (app: Express) => {
  return routes.map((item: TRoute) => {
    return app.use(item.path, item.route);
  });
};
