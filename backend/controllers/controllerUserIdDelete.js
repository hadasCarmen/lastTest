import { serviceUserIdDelete } from "../services/serviceUserIdDelete.js";

export const controllerUserIdDelete = async (req, res) => {
  try {
    const { id } = req.params;
    await serviceUserIdDelete(id);
    res.status(200).json("user deleted");
  } catch (error) {
    res.status(400).json("user not recive", error);
  }
};
