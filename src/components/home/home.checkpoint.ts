// - data transfer object / You can validate the inputs before reaching the service
import { NHomeCheckpoint } from "./home.types";
import { injectable } from "tsyringe";
@injectable()
class HomeCheckpoint {
  validate: NHomeCheckpoint.TValidate<NHomeCheckpoint.TValidateInput> = (
    input
  ) => {
    if (input.num > 10) return "input greater than 10";
    if (input.num < 10) return "input smaller than 10";
    return input;
  };
}

export default HomeCheckpoint;
