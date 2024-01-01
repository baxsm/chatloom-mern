import { Request, Response } from "express";
import User from "../models/model.user.js";
import generateToken from "../utils/util.token.js";
import connectDatabase from "../config/db.js";

const registerUser = async (req: Request, res: Response) => {
  try {
    await connectDatabase();
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      res.status(405).json("Missing fields");
    }

    const isUserExists = await User.findOne({ email });

    if (isUserExists) {
      res.status(400).json("User already exists");
    }

    const user = await User.create({ name, email, password });

    if (user) {
      res.status(200).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id),
      });
    } else {
      res.status(404).json("User not found");
    }
  } catch (error) {
    res.status(500).json("Something went wrong");
  }
};

const authUser = async (req: Request, res: Response) => {
  try {
    await connectDatabase();
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user) {
      const isPasswordMatched = await user.matchPassword(password);
      if (isPasswordMatched) {
        res.status(200).json(user);
      } else {
        res.status(400).json("Incorrect credentials");
      }
    } else {
      res.status(404).json("User not found");
    }
  } catch (error) {
    console.log(error);
    res.status(500).json("Something went wrong");
  }
};

const logout = (req: Request, res: Response) => {
  try {
    res
      .clearCookie("access_token", {
        sameSite: "none",
        secure: true,
      })
      .status(200)
      .json("User has been logged out");
  } catch (error) {
    res.status(500).json("Something went wrong");
  }
};

export { registerUser, authUser, logout };
