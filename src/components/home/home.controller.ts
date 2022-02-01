//controller layer - handle requests
import { Request, Response } from "express";
import { Service } from "typedi";
import HomeService from "./home.service";

@Service()
class HomeController {
  constructor(private homeService: HomeService) {}

  sayHello(req: Request, res: Response) {
    const result = this.homeService.sayHello();
    return res.json(result);
  }
}

export default HomeController;
