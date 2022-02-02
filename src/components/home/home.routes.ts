import { container } from "tsyringe";
import Implementer from "../../shared/Implementer";
import HomeController from "./home.controller";

const controller = container.resolve(HomeController);

const homeRoute = Implementer({
  conf: { path: "/", method: "get" },
  attach: (req, res) => controller.sayHello(req, res),
});

export default homeRoute;
