import express, { Application } from "express";
import { validate } from "express-jsonschema";
import { JSONSchema4 } from "json-schema";
import { Db } from "mongodb";
import { CreateUserHandler } from "./handlers/CreateUserHandler";
import { CREATE_USER } from "./constants/Paths";
import CreateUserSchema from "./schemas/CreateUserSchema";



export default (app: Application, db: Db) => {
	const CreateUser = new CreateUserHandler();

	app.post(CREATE_USER, validate({ body: CreateUserSchema as JSONSchema4 }), (req, res) => CreateUser.handle(req, res));


	app.use(express.static("app/build"));
};