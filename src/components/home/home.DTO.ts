// - data transfer object / You can validate the inputs before reaching the service
import { Service } from "typedi";
import { NHomeDto } from "./home.types";

@Service()
class HomeDTO {
  validate: NHomeDto.TValidate<NHomeDto.TValidateInput> = (input) => {
    if (input.num > 10) return "input greater than 10";
    if (input.num < 10) return "input smaller than 10";
    return input;
  };
}

export default HomeDTO;
