import { Express } from "express";
import { TMiddleware, TRoute } from "../..";
import routes from "./routes";
import _attacher from "./_attacher";

const _needs = async ({
  app,
  playground,
  router,
  middlewares,
}: {
  app: Express;
  playground?: () => Promise<void> | void;
  router: TRoute[];
  middlewares?: TMiddleware[];
}) => {
  if (playground) await playground();
  await middlewares?.map((middleware: TMiddleware) =>
    app.use(_attacher(middleware))
  );
  await routes(app, router);
};

export default _needs;
