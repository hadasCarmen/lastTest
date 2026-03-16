import { serviceLaunchersPost } from "../services/serviceLaunchersPost.js";

export const controllerLaunchersPost = async (req, res) => {
  try {
    const {city, rocketType, latitude, longitude, name} = req.body;
    await serviceLaunchersPost(city, rocketType, latitude, longitude, name);
    res.status(200).json('lancher created')
  } catch (error) {
    res.status(400).json('lancher not created',error)
  }
};
