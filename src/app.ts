import "reflect-metadata";
import bodyParser from "body-parser";
import helmet from "./middlewares/helmet";
import * as appGlobal from "./global/app.global";
import _needs from "./global/_needs";
import homeRoute from "./components/home/home.routes";

const app = appGlobal.default;

_needs({
  app,
  router: [{ path: "/", route: homeRoute }],
  middlewares: [
    bodyParser.urlencoded({ extended: false }),
    bodyParser.json({ limit: "300kb" }),
    helmet,
  ],
});

export default app;
