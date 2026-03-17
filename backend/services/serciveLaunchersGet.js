import { Lancher } from "../models/launcher.js";

export const serciveLaunchersGet = async (city,rocketType,destroid) => {
  const params={}
  if (city) {
    params.city=city
  }
  if (rocketType) {
    params.rocketType=rocketType
  }
  if (destroid) {
    params.destroid=destroid
  }
  
  return Lancher.find(params);
};
