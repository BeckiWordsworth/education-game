import { Request, Response } from "express";
import { ResponseModel } from "../models/ResponseModel";
import { UserModel } from "../models/UserModel";
import { User } from "../api/user";

export class GetUsersHandler {
  constructor(private userRepo: User) {}

  async handle(
    { query: { userId } }: Request<{}, {}, void, { userId: string }>,
    res: Response<ResponseModel<UserModel[] | null>>
  ) {
    if (!userId) {
      console.log(
        "id was not provided, returning error: no referenceId provided"
      );

      res.status(400);
      res.json(new ResponseModel(null, "no userId provided"));
      return;
    }

    const user = await this.userRepo.getById(userId);

    console.log("found user with userId", userId);

    res.json(new ResponseModel(user));
  }
}
