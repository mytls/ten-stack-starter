//controller layer - handle requests
import { Request, Response } from "express";
import { Service } from "typedi";
import HomeDTO from "./home.DTO";
import HomeService from "./home.service";

@Service()
class HomeController {
  constructor(private homeService: HomeService, private homeDTO: HomeDTO) {}

  sayHello(req: Request, res: Response) {
    // validate data before calling service
    const validate = this.homeDTO.validate({ num: 11 });
    if (typeof validate === "string") return res.json(validate);

    // call the following code when validated data
    const result = this.homeService.sayHello();
    return res.json(result);
  }
}

export default HomeController;
