/* eslint-disable security/detect-object-injection */
import express, { NextFunction, Request, Response } from "express";
import _attacher from "../global/_attacher";

type TAttach = (req: Request, res: Response, next?: NextFunction) => Response;

const Implementer = (
  ...routes: {
    conf: {
      method: "post" | "put" | "patch" | "delete" | "use" | "get";
      path: string;
    };
    attach: TAttach[] | TAttach;
  }[]
) => {
  const app = express.Router();
  routes.map(({ attach, conf: { method, path } }) => {
    const handler =
      attach instanceof Array
        ? attach.map((item) => _attacher(item))
        : _attacher(attach);

    app[method](path, handler);

    return null;
  });

  return app;
};

export default Implementer;
