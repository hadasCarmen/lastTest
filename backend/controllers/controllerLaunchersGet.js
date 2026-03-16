import { serciveLaunchersGet } from "../services/serciveLaunchersGet.js";

export const controllerLaunchersGet = async (req, res) => {
  try {
    const {city,rocketType}= req.query
    const lunchers=await serciveLaunchersGet(city,rocketType);
    res.status(200).json(lunchers)
  } catch (error) {
    res.status(400).json('there is problem get lanchers',error)
  }
};
