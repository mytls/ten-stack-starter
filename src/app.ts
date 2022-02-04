import "reflect-metadata";
import bodyParser from "body-parser";
import helmet from "./middlewares/helmet";
import { _needs } from "ten-stack-requires";
import HOME_ROUTE from "./components/home/home.routes";
import express from "express";

const APP = express();

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
