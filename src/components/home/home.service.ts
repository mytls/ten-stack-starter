import { Service } from "typedi";

@Service()
class HomeService {
  sayHello() {
    return "Hello world";
  }
}

export default HomeService;
