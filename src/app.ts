import "reflect-metadata";
import bodyParser from "body-parser";
import express from "express";
import helmet from "./middlewares/helmet";
import routes from "./routes";

const app = express();

app.use(bodyParser.json({ limit: "300kb" }));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(helmet);

routes(app);

export default app;
