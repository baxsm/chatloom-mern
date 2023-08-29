import express from "express";
import { authUser, registerUser, logout } from "../controllers/controller.auth.js";

const authRoutes = express.Router();

authRoutes.post("/register", registerUser);
authRoutes.post("/login", authUser);
authRoutes.post("/logout", logout)

export default authRoutes;