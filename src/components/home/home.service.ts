//service layer - your business logic
import HomeDAL from "./home.DAL";
import { NHomeService } from "./home.types";
import { injectable } from "tsyringe";

@injectable()
class HomeService {
  constructor(private homeDAL: HomeDAL) {}

  sayHello: NHomeService.TSayHello = () => {
    const response = this.homeDAL.create();
    return `${response} & Hello world`;
  };
}

export default HomeService;
