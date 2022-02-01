import "reflect-metadata";
import { Container } from "typedi";
import HomeController from "./home.controller";
import Implementer from "../../shared/Implementer";

const controller = Container.get(HomeController);

const homeRoute = Implementer({
  path: "/",
  method: "get",
  attach: controller.sayHello,
});

export default homeRoute;
