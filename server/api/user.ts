import { Collection, Db } from "mongodb";
import { UserModel } from "../models/UserModel";

export const COLLECTION = "users";

export class User {
  private collection: Collection<UserModel>;

  constructor(db: Db) {
    this.collection = db.collection(COLLECTION);
  }

  async createUser(user: UserModel) {
    await this.collection.insertOne(user);
    return this.getById(user.id);
  }

  async getById(id: string) {
    const user = await this.collection.findOne({ id });

    /** Just a hack to remove _id from mongodb's result here, typescript gets confused when using generics with the collection. Though, the pros weighs out the cons imo. */
    // @ts-ignore
    if (user._id)
      // @ts-ignore
      delete user._id;

    return user;
  }
}
