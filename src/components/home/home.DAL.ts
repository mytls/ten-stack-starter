// Data access layer - working with database
import { injectable } from "tsyringe";

@injectable()
class HomeDAL {
  create() {
    //Request to database
    return "User Was Created From DAL";
  }
}

export default HomeDAL;
