/* eslint-disable security/detect-object-injection */
/* eslint-disable @typescript-eslint/no-explicit-any */
import express, { NextFunction, Request, Response } from "express";
import { _attacher } from "../global/_attacher";

type TAttach = (req: Request, res: Response, next?: NextFunction) => any;

const Implementer = (
  ...routes: {
    method: "post" | "put" | "patch" | "delete" | "use" | "get";
    path: string;
    attach: TAttach[] | TAttach;
  }[]
) => {
  const app = express.Router();

  routes.map(({ attach, method, path }) => {
    const handler =
      attach instanceof Array
        ? attach.map((item) =>
            _attacher((req, res, next) => item(req, res, next))
          )
        : _attacher((req, res, next) => attach(req, res, next));

    app[method](path, handler);
    return null;
  });

  return app;
};

export default Implementer;
