import homeRoute from "./components/home/home.routes";
import { Express } from "express";
import { TRoute } from "..";

const routes: TRoute[] = [{ path: "/", route: homeRoute }];

export default (app: Express) => {
  return routes.map((item: TRoute) => {
    return app.use(item.path, item.route);
  });
};
