//controller layer - handle requests
import { Request, Response } from "express";
import HomeCheckpoint from "./home.checkpoint";
import HomeService from "./home.service";
import { injectable } from "tsyringe";
import { Next } from "../../..";

@injectable()
class HomeController {
  constructor(
    private homeService: HomeService,
    private homeCheckpoint: HomeCheckpoint
  ) {}

  sayHello(req: Request, res: Response, next: Next) {
    // validate data before calling service
    const validate = this.homeCheckpoint.validate({ num: 10 });
    if (typeof validate === "string")
      return next({ type: "INVALID_ARG", status: 400, message: validate });

    // call the following code when validated data
    const result = this.homeService.sayHello();
    return res.json(result);
  }
}

export default HomeController;
