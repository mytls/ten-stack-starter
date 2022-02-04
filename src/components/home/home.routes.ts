import { Implementer } from "ten-stack-requires";
import { container } from "tsyringe";
import HomeController from "./home.controller";

const CONTROLLER = container.resolve(HomeController);

const HOME_ROUTE = Implementer({
  conf: { path: "/", method: "get" },
  attach: (...data) => CONTROLLER.sayHello(...data),
});

export default HOME_ROUTE;
