import mongoose from "mongoose";

const lancherSchema = new mongoose.Schema({
  city: {
    type: String,
  },
  rocketType: {
    type: String,
  },
  latitude: {
    type: Number,
  },
  longitude: {
    type: Number,
  },
  name: {
    type: String,
  },
  destroid: {
    type: Boolean,
    default:false
  },
});

export const Lancher = mongoose.model("Lancher", lancherSchema);
