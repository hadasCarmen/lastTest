import { User } from "../models/user.js";

export const serviceUserGet = async (userId) => {
  return User.findById(userId);
};
