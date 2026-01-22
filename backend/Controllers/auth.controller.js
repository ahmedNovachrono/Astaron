import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import { JWT_SECRET, JWT_EXPIRES_IN } from "../config/env.js";

export const signUp = async (req, res, next) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const { username, email, password, personality } = req.body;

    //cheack if user already signed in
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      const error = new Error("User already exist");
      error.statusCode = 409;
      throw error;
    }

    //Hashing Password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //Save user to DB
    const newUser = await User.create(
      [{ username, email, password: hashedPassword, personality }],
      { session }
    );

    const token = jwt.sign({ userId: newUser[0]._id }, JWT_SECRET, {
      expiresIn: JWT_EXPIRES_IN,
    });

    await session.commitTransaction();
    session.endSession();

    res.status(201).json({
      succes: true,
      message: "User Created",
      data: {
        token,
        user: newUser[0],
      },
    });
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    next(error);
  }
};

export const signIn = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    //cheack is user is signed
    const user = await User.findOne({ email });

    if (!user) {
      const error = new Error("User Doesn't Exist");
      error.statusCode = 404;
      throw error;
    }

    //Validate the user
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      const error = new Error("Password Incorrect");
      error.statusCode = 400;
      throw error;
    }

    //sign in method
    const token = jwt.sign({ userId: user._id }, JWT_SECRET, {
      expiresIn: JWT_EXPIRES_IN,
    });
    res.status(200).json({
      succes: true,
      token,
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

export const signOut = async (req, res, next) => {};
