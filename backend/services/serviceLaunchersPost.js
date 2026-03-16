import { Lancher } from "../models/launcher.js";

export const serviceLaunchersPost = async (
  city,
  rocketType,
  latitude,
  longitude,
  name,
) => {
  if ( !city || !rocketType || !latitude || !longitude || !name) {
    throw new Error("details missing");
  }
  if (typeof latitude !== "number" || typeof longitude !== "number") {
    throw new Error("latitude and longitude must be number");
  }
  // if (
  //     rocketType !== "Shahab3" &&
  //     rocketType !== "Fetah110" &&
  //     rocketType !== "Radwan" &&
  //     rocketType !== "Kheibar"
  //   ) {
  //     throw new Error("rocketType need be from options");
      
  //   }
  Lancher.create({
      city: city,
      rocketType: rocketType,
      latitude: latitude,
      longitude: longitude,
      name: name,
    });
    return
};
