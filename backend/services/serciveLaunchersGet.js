import { Lancher } from "../models/launcher.js";

export const serciveLaunchersGet = async (city,rocketType) => {
  const params={}
  if (city) {
    params.city=city
  }
  if (rocketType) {
    params.rocketType=rocketType
  }
  return Lancher.find(params);
};
