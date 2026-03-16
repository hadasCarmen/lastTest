import { serviceLaunchersId } from "../services/serviceLaunchersId.js";

export const controllerLaunchersId = async (req, res) => {
  try {
    const { id } = req.params;
    const lancher=await serviceLaunchersId(id);
    res.status(200).json(lancher);
  } catch (error) {
    res.status(400).json("lancher not recive", error);
  }
};
