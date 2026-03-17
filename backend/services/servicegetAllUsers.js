import { User } from "../models/user.js";

export const servicegetAllUsers = async () => {
  return User.find();
};
