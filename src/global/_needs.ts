import { Express } from "express";
import { TMiddleware, TRoute } from "../..";
import routes from "./routes";
import _attacher from "./_attacher";

const _needs = ({
  app,
  router,
  middlewares,
}: {
  app: Express;
  router: TRoute[];
  middlewares?: TMiddleware[];
}) => {
  middlewares?.map((middleware: TMiddleware) => app.use(_attacher(middleware)));
  routes(app, router);
};

export default _needs;
