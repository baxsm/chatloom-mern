import express, { Express } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import { notFound, errorHandler } from "./middleware/middleware.error.js";
import authRoutes from "./routes/routes.auth.js";
import userRoutes from "./routes/routes.user.js";

dotenv.config({
  path: process.env.NODE_ENV === "production" ? ".env" : ".env.local",
});

const app: Express = express();

app.use(express.static("public"))
app.use(express.json());
app.use(cookieParser());
app.use(cors());

// api routes;
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);

// express server
const PORT = process.env.PORT;

// test ping
app.get("/api/ping", (req, res) => {
  res.status(200).json("pong");
});

// // middleware | errors
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server start on PORT: ${PORT}`);
});
