// Data access layer - working with database
import { Service } from "typedi";

@Service()
class HomeDAL {
  create() {
    //Request to database
    return "User Was Created From DAL";
  }
}

export default HomeDAL;
