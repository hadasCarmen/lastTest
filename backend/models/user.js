import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
  user_type: String,
  last_login: { type: Date, default: Date.now },
});

export const User=mongoose.model("User",UserSchema)