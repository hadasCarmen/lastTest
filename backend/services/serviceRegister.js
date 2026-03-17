import { User } from "../models/user.js";

export const serviceRegister = async (username, password, email, user_type) => {
  if (!username || !password || !email || !user_type) {
    throw new Error("details missing");
  }
  if (
    user_type !== "IntelligenceCorpsUser" &&
    user_type !== "AirForceUser" &&
    user_type !== "AdministratorUser"
  ) {
    throw new Error("user not ligal");
  }
  await User.create({
    username: username,
    password: password,
    email: email,
    user_type: user_type,
  });
};
