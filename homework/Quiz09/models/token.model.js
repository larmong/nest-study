import mongoose from "mongoose";

const tokenDataSchema = new mongoose.Schema({
  token: String,
  phone: String,
  isAuth: Boolean,
});

export const TokenData = mongoose.model("TokenData", tokenDataSchema);
