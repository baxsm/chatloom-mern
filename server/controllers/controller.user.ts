import { Request, Response } from "express";
import User from "../models/model.user.js";
import connectDatabase from "../config/db.js";
import multer from "multer";

const getUser = async (req: Request, res: Response) => {
  try {
    await connectDatabase();
    const { userId } = req.body;
    const user = await User.findOne({ id: userId });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json("Failed to fetch user");
  }
};

const updateOnboarding = async (req: Request, res: Response) => {
  try {
    await connectDatabase();
    const { userId, username, imageUrl } = req.body;

    const user = await User.findOneAndUpdate(
      { _id: userId },
      {
        username: username.toLowerCase(),
        imageUrl: imageUrl,
        onboarding: true,
      },
      { upsert: true }
    );

    res.status(200).json(user);

  } catch (error) {
    res.status(500).json("Failed to update data" + error);
  }
};

const checkUsername = async (req: Request, res: Response) => {
  try {
    const { username } = req.body;
    console.log(username);
    const checkUsername = await User.findOne({ username: username });
    if (checkUsername) {
      res.status(400).json("Username already taken");
    } else {
      res.status(200).json("success");
    }
  } catch (error) {
    res.status(500).json("Error verifying username" + error);
  }
};

const uploadImage = async (req: Request, res: Response) => {
  const filename = req.file?.filename;
  res.status(200).json(filename);
};

export { getUser, updateOnboarding, uploadImage, checkUsername };
