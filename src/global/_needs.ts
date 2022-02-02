import { Express } from "express";
import { TMiddleware } from "../..";
import _attacher from "./_attacher";

const _needs = ({
  app,
  routes,
  middlewares,
}: {
  app: Express;
  routes: (app: Express) => Express[];
  middlewares?: TMiddleware[];
}) => {
  middlewares?.map((middleware: TMiddleware) => app.use(_attacher(middleware)));
  routes(app);
};

export default _needs;
