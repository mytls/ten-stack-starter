//service layer - your business logic
import { Service } from "typedi";
import HomeDAL from "./home.DAL";
import { NHomeService } from "./home.types";

@Service()
class HomeService {
  constructor(private homeDAL: HomeDAL) {}

  sayHello: NHomeService.TSayHello = () => {
    const response = this.homeDAL.create();
    return `${response} & Hello world`;
  };
}

export default HomeService;
