import express, { Request, Response } from "express";
import { getUser, updateOnboarding, uploadImage, checkUsername } from "../controllers/controller.user.js";
import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

const userRoutes = express.Router();

userRoutes.post("/getUser", getUser);
userRoutes.post("/updateOnboarding", updateOnboarding);
userRoutes.post("/checkUsername", checkUsername);
userRoutes.post("/uploadImage", upload.single('file'), uploadImage)

export default userRoutes;
