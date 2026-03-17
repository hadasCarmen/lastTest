import { serviceUserGet } from "../services/serviceUserGet.js";

export const controllerUserGet = async (req, res) => {
  try {
    const {userId}=req.user
    
    const user=await serviceUserGet(userId);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json("user not recive", error);
  }
};
