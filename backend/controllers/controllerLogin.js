import { serviceLogin } from "../services/serviceLogin.js";

export const controllerLogin = async (req, res) => {
  try {
    const { username, password } = req.body;
    const login=await serviceLogin(username, password);
    res.status(200).json(login);
  } catch (error) {
    res.status(400).json("user not login", error);
  }
};
