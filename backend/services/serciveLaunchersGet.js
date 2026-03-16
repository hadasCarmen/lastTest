import { Lancher } from "../models/launcher.js";

export const serciveLaunchersGet = async () => {
  return Lancher.find();
};
