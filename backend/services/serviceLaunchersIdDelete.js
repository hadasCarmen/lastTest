import { Lancher } from "../models/launcher.js";

export const serviceLaunchersIdDelete = async (id) => {
  return Lancher.findByIdAndDelete(id);
};
