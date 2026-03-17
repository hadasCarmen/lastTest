import { User } from "../models/user.js";

export const serviceUserIdDelete = async (id) => {
  return User.findByIdAndDelete(id);
};
