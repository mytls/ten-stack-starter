/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";

declare module "express" {
  export interface Request {
    [key: string]: any;
  }

  export interface Response {
    [key: string]: any;
  }
}
