import { serviceUpdate } from "../services/serviceUpdate.js";

export const controllerUpdate = async (req, res) => {
  try {
    const updatesAndId=req.body
    await serviceUpdate(updatesAndId);
    res.status(200).json("user update");
  } catch (error) {
    res.status(400).json("user not update", error);
  }
};
