import express, { Application } from "express";
import { validate } from "express-jsonschema";
import { JSONSchema4 } from "json-schema";
import { Db } from "mongodb";
import { CreateUserHandler } from "../handlers/CreateUserHandler";
import { GetUserHandler } from "../handlers/GetUserHandler";
import {
  CREATE_USER,
  GET_USER,
  UPDATE_USER,
  DELETE_USER,
  GET_TOPIC,
  CREATE_TOPIC,
  UPDATE_TOPIC,
  DELETE_TOPIC,
  GET_QUESTION,
  CREATE_QUESTION,
  UPDATE_QUESTION,
  DELETE_QUESTION,
  GET_RESULT,
  DELETE_RESULT,
  GET_SCORES,
} from "../constants/Paths";
import CreateUserSchema from "./schemas/CreateUserSchema";
import { User } from "../api/user";

export default (app: Application, db: Db) => {
  const createUser = new CreateUserHandler(User);
  const getUsers = new GetUserHandler(User);

  //Users
  app.post(
    CREATE_USER,
    validate({ body: CreateUserSchema as JSONSchema4 }),
    (req, res) => createUser.handle(req, res)
  );
  app.get(GET_USER, (req, res) => getUsers.handle(req as any, res));
  app.patch(UPDATE_USER, (req, res) => getUsers.handle(req as any, res));
  app.delete(
    DELETE_USER,
    validate({ body: CreateUserSchema as JSONSchema4 }),
    (req, res) => deleteUser.handle(req, res)
  );

  //Topics
  app.get(GET_TOPIC, (req, res) => getTopic.handle(req as any, res));
  app.post(
    CREATE_TOPIC,
    validate({ body: CreateTopicSchema as JSONSchema4 }),
    (req, res) => createTopic.handle(req, res)
  );
  app.patch(UPDATE_TOPIC, (req, res) => updateTopic.handle(req as any, res));
  app.delete(
    DELETE_TOPIC,
    validate({ body: DeleteTopicSchema as JSONSchema4 }),
    (req, res) => deleteTopic.handle(req, res)
  );

  //Questions
  app.get(GET_QUESTION, (req, res) => getQuestion.handle(req as any, res));
  app.post(
    CREATE_QUESTION,
    validate({ body: CreateQuestionSchema as JSONSchema4 }),
    (req, res) => createQuestion.handle(req, res)
  );
  app.patch(UPDATE_QUESTION, (req, res) =>
    updateQuestion.handle(req as any, res)
  );
  app.delete(
    DELETE_QUESTION,
    validate({ body: DeleteQuestionSchema as JSONSchema4 }),
    (req, res) => deleteQuestion.handle(req, res)
  );

  //results
  app.get(GET_RESULT, (req, res) => getResults.handle(req as any, res));
  app.delete(
    DELETE_RESULT,
    validate({ body: DeleteResultSchema as JSONSchema4 }),
    (req, res) => deleteResult.handle(req, res)
  );

  //scores
  app.get(GET_SCORES, (req, res) => getScores.handle(req as any, res));

  app.use(express.static("app/build"));
};
