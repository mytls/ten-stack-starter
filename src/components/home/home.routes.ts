import { container } from "tsyringe";
import Implementer from "../../shared/Implementer";
import HomeController from "./home.controller";

const CONTROLLER = container.resolve(HomeController);

const HOME_ROUTE = Implementer({
  conf: { path: "/", method: "get" },
  attach: (...data) => CONTROLLER.sayHello(...data),
});

export default HOME_ROUTE;
