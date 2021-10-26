import express from "express";
import cors from "cors";
import { json } from "body-parser";
import { readdirSync } from "fs";
import path, { join } from "path";
import morgan from "morgan";
// import openapi from "@ev-fns/openapi";
import { notFound, exception } from "@ev-fns/errors";

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.set("trust proxy", ["loopback", "linklocal", "uniquelocal"]);

app.use(cors());
app.use(json());
app.use(morgan("combined", { skip: () => process.env.NODE_ENV === "test" }));

const routes = readdirSync(join(__dirname, "routes"));
for (const route of routes) {
  app.use(require(join(__dirname, "routes", route)).default);
}

app.use(notFound);
app.use(exception);

export default app;
