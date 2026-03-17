import { User } from "../models/user.js";
import jwt from "jsonwebtoken";

export const serviceLogin = async (username, password) => {
  const user = await User.findOne({ username: username.toLowerCase() });
  if (!user) {
    throw new Error("User not found");
  }
  if (user.password !== password) {
    throw new Error("wrong password");
  }
  const token = jwt.sign(
    { userId: user._id, username: user.username, user_type: user.user_type },
    process.env.JWT_SECRET,
    { expiresIn: "15h" },
  );
  return {token}
};
