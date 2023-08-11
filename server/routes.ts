import express, { Application } from "express";
import { validate } from "express-jsonschema";
import { JSONSchema4 } from "json-schema";
import { Db } from "mongodb";
import { CreateUserHandler } from "./handlers/CreateUserHandler";
import { GetUserHandler } from "./handlers/GetUserHandler";
import { CREATE_USER, GET_USER } from "./constants/Paths";
import CreateUserSchema from "./schemas/CreateUserSchema";


export default (app: Application, db: Db) => {
	const createUser = new CreateUserHandler();
  const getUsers = new GetUserHandler();

	app.post(CREATE_USER, validate({ body: CreateUserSchema as JSONSchema4 }), (req, res) => createUser.handle(req, res));
  app.get(GET_USER, (req, res) => getUsers.handle(req as any, res));

	app.use(express.static("app/build"))
};