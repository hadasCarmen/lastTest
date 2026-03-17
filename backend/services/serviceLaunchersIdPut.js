import { Lancher } from "../models/launcher.js";

export const serviceLaunchersIdPut = async (id, updates) => {
  if (!updates) {
    throw new Error("no details to update");
  }
 
  const goodAndLigalUpdates = {};
  if (updates.city) {
    if (typeof updates.city == "string") {
      goodAndLigalUpdates.city = updates.city;
    }
  }
  if (updates.rocketType) {
    if (
      updates.rocketType === "Shahab3" ||
      updates.rocketType === "Fetah110" ||
      updates.rocketType === "Radwan" ||
      updates.rocketType === "Kheibar"
    ) {
      goodAndLigalUpdates.rocketType = updates.rocketType;
    }
  }
  if (updates.latitude) {
    if (typeof updates.latitude == "number") {
      goodAndLigalUpdates.latitude = updates.latitude;
    }
  }
  if (updates.longitude) {
    if (typeof updates.longitude == "number") {
      goodAndLigalUpdates.longitude = updates.longitude;
    }
  }
  if (updates.name) {
    if (typeof updates.name == "string") {
      goodAndLigalUpdates.name = updates.name;
    }
  }
  if (updates.destroid) {
    if (typeof updates.destroid == "boolean") {
      goodAndLigalUpdates.destroid = updates.destroid;
    }
  }

  await Lancher.findByIdAndUpdate(id, goodAndLigalUpdates);
  return;
};
