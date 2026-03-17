import { serviceRegister } from "../services/serviceRegister.js";

export const controllerRegister = async (req, res) => {
  try {
    const { username, password, email, user_type } = req.body;
    await serviceRegister(username, password, email, user_type);
    res.status(200).json("user created");
  } catch (error) {
    res.status(400).json("user not created", error);
  }
};
