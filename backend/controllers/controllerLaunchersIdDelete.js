import { serviceLaunchersIdDelete } from "../services/serviceLaunchersIdDelete.js";

export const controllerLaunchersIdDelete = async (req, res) => {
  try {
    const { id } = req.params;
    const lancher=await serviceLaunchersIdDelete(id);
    res.status(200).json(lancher);
  } catch (error) {
    res.status(400).json("lancher not recive", error);
  }
};
