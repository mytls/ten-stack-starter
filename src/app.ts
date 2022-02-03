import "reflect-metadata";
import bodyParser from "body-parser";
import helmet from "./middlewares/helmet";
import * as appGlobal from "./global/app.global";
import _needs from "./global/_needs";
import HOME_ROUTE from "./components/home/home.routes";

const APP = appGlobal.default;

_needs({
  app: APP,
  router: [{ path: "/", route: HOME_ROUTE }],
  middlewares: [
    bodyParser.urlencoded({ extended: false }),
    bodyParser.json({ limit: "300kb" }),
    helmet,
  ],
});

export default APP;
