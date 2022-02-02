//service layer - your business logic
import HomeDAL from "./home.DAL";
import { NHomeService } from "./home.types";
import { injectable } from "tsyringe";

@injectable()
class HomeService {
  constructor(private homeDAL: HomeDAL) {}

  sayHello: NHomeService.TSayHello = () => {
    this.homeDAL.create(); // The result is: User Was Created From DAL

    return "Hello world";
  };
}

export default HomeService;
