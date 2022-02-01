/* eslint-disable @typescript-eslint/no-unused-vars */
import "reflect-metadata";
import bodyParser from "body-parser";
import express from "express";
import helmet from "./middlewares/helmet";
import routes from "./routes";
import { Needs } from "./app.module";

const app = express();

@Needs({
  app,
  routes,
  middlewares: [
    bodyParser.urlencoded({ extended: false }),
    bodyParser.json({ limit: "300kb" }),
    helmet,
    (req, res, next) => {
      console.log(req.url);
    },
  ],
})
class AppNeeds {}

export default app;
