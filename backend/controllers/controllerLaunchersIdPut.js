import { serviceLaunchersIdPut } from "../services/serviceLaunchersIdPut.js";

export const controllerLaunchersIdPut = async (req, res) => {
  try {
    const { id } = req.params;
    const updates=req.body
    const lancherUpdate=await serviceLaunchersIdPut(id,updates);
    res.status(200).json(lancherUpdate);
  } catch (error) {
    res.status(400).json("lancher not update", error);
  }
};
