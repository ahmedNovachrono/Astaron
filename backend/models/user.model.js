import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "please type your username"],
      trim: true,
      minLength: 2,
      maxLength: 50,
    },
    email: {
      type: String,
      required: [true, "please type your email"],
      trim: true,
      unique: true,
      match: [/\S+@\S+\.\S+/, "please fill in a valid email"],
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "please insert a password"],
      minLength: [6, "password must be at least 6 charchters"],
    },
    personality: {
      type: String,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
