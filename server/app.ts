import express, { Express, Request, Response } from "express";
import { MONGO_DB_URL, PORT } from "./config";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = PORT;

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
