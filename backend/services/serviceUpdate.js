import { User } from "../models/user.js";

export const serviceUpdate = async (updatesAndId) => {
  if (!updatesAndId || !updatesAndId.userId) {
    throw new Error("you need send updates and id ");
  }
  const goodUpdates = {};
  if (updatesAndId.username) {
    goodUpdates.username = updatesAndId.username;
  }

  if (updatesAndId.password) {
    goodUpdates.password = updatesAndId.password;
  }
  if (updatesAndId.email) {
    goodUpdates.email = updatesAndId.email;
  }
  if (updatesAndId.user_type) {
    if (
      updatesAndId.user_type !== "IntelligenceCorpsUser" &&
      updatesAndId.user_type !== "AirForceUser" &&
      updatesAndId.user_type !== "AdministratorUser"
    ) {
      throw new Error("type not ligal");
    }
    goodUpdates.user_type = updatesAndId.user_type;
  }

  await User.findByIdAndUpdate(updatesAndId.userId, goodUpdates);
};
