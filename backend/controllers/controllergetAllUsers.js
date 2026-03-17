import { servicegetAllUsers } from "../services/servicegetAllUsers.js";

export const controllergetAllUsers = async (req, res) => {
  try {
    const users=await servicegetAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json("users not recived", error);
  }
};