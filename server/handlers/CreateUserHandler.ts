import { Request, Response } from "express";
import { UserModel } from "../models/UserModel";
import { ResponseModel } from "../models/ResponseModel";
import { User } from "../api/user";
import { v4 as uuidv4 } from "uuid";

export class CreateUserHandler {
  constructor(private userRepo: User) {}

  // newUser
  //   .save()
  //   .then(() => {
  //     res.status(201).json({ created: true });
  //   })
  //   .catch(err => {
  //     res.status(400).json({ created: false, error: err });
  //   });
  // });

  async handle({ body }: Request<{}, {}>, res: Response<UserModel>) {
    if (!body.username || !body.email || !body.password) {
      res.status(400).json({
        error: "You must provide a username, email and password.",
      });

      const UserCreate: UserModel = {
        ...body,
        id: uuidv4(),
        date: new Date(),
      };

      const createdUser = await this.userRepo.createUser(UserCreate);

      res.json(new ResponseModel(createdUser));
    }
  }
}
