import "reflect-metadata";
import bodyParser from "body-parser";
import express from "express";

const app = express();

app.use(bodyParser.json({ limit: "300kb" }));
app.use(bodyParser.urlencoded({ extended: false }));

export default app;
