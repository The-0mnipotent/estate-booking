import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.model.js";
import { errorHandler } from "../utils/error.js";

export const signUp = async (req, res, next) => {
  const { username, email, password } = req.body;
  try {
    const hashedPassword = bcryptjs.hashSync(password, 11);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();
    res
      .status(201)
      .json({ success: true, message: "User Created Successfully" });
  } catch (error) {
    console.log("model error", error);
    next(error);
  }
};

export const signIn = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    //verifying email
    const validUser = await User.findOne({ email });
    if (!validUser) {
      return next(errorHandler(404, "User not found"));
    }
    // verifying password
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) {
      return next(errorHandler(404, "Invalid Credentials!"));
    }

    // everything is correct
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    res
      .cookie("token", token, {
        httpOnly: true,
        expires: new Date(Date.now() + 3600000),
      })
      .json({
        success: true,
        user: validUser,
      });
  } catch (error) {
    next(error);
  }
};
