//Import Express
import express from "express";
//Import Express Type
import type { Express } from "express";
//Import Cors
import cors from "cors";
//Import Cors Options
import { corsOptions } from "./corsOptions";
//import Routes
import { router } from "./Routes";
//import Database Connection
import { databaseConnection } from "./DB/databaseConnection";
//import Start Express Server
import { startExpressServer } from "./startExpressServer";

//PORT
const PORT: number = Number(process.env.port) || 3000;

const app: Express = express();

app.use(cors(corsOptions));

app.use(express.json());

app.use(router);

databaseConnection();

startExpressServer(app, PORT);

//app.listen(PORT, startServerCallback);







