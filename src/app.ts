import "reflect-metadata";
import bodyParser from "body-parser";
import express from "express";
import homeRoute from "./components/home/home.routes";

const app = express();

app.use(bodyParser.json({ limit: "300kb" }));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(homeRoute);

export default app;
