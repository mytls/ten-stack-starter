import "reflect-metadata";
import express from "express";
import { Container } from "typedi";
import HomeController from "./home.controller";

const homeRoute = express.Router();

const controller = Container.get(HomeController);

homeRoute.get("/", (req, res) => controller.sayHello(req, res));

export default homeRoute;
