import { Lancher } from "../models/launcher.js";

export const serviceLaunchersId = async (id) => {
  return Lancher.findById(id);
};
