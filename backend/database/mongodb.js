import mongoose from "mongoose";

import { DB_URI, NODE_ENV } from "../config/env.js";

if (!DB_URI) {
  throw new Error(
    "please define DB_URI envairoment variable coming from .env<developmen/production>.local"
  );
}

const connectToDB = async () => {
  try {
    await mongoose.connect(DB_URI);
    console.log(`connected to DB in ${NODE_ENV} mode`);
  } catch (error) {
    console.log(`failed connecting to DB \n ${error}`);
    process.exit(1);
  }
};

export default connectToDB;
