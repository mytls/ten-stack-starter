//service layer - your business logic
import { Service } from "typedi";
import HomeDAL from "./home.DAL";

@Service()
class HomeService {
  constructor(private homeDAL: HomeDAL) {}

  sayHello() {
    const response = this.homeDAL.create();
    return `${response} & Hello world`;
  }
}

export default HomeService;
