/* eslint-disable @typescript-eslint/no-unused-vars */
import "reflect-metadata";
import bodyParser from "body-parser";
import express from "express";
import helmet from "./middlewares/helmet";
import routes from "./global/routes";
import { Needs } from "./global/app.module";
import * as appGlobal from "./global/app.global";

const app = appGlobal.default;

@Needs({
  app,
  routes,
  middlewares: [
    bodyParser.urlencoded({ extended: false }),
    bodyParser.json({ limit: "300kb" }),
    helmet,
  ],
})
class AppNeeds {}

export default app;
