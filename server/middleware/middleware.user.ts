import jwt from "jsonwebtoken";
import User from "../models/model.user.js";
import { NextFunction, Request, Response } from "express";

const protect = (req: Request, res: Response, next: NextFunction) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      if (!process.env.JWT_SECRET) {
        res.status(404);
        throw new Error("JWT_SECRET not found");
      }

      const decoded: any = jwt.verify(token, process.env.JWT_SECRET);

      User.findById(decoded.id)
        .select("-password")
        .then((user) => {
          if (!user) {
            res.status(401);
            throw new Error("User not found");
          }

          req.user = user;
          next();
        })
        .catch((error) => {
          res.status(401);
          next(error);
        });
    } catch (error) {
      res.status(401);
      next(error);
    }
  }

  if (!token) {
    res.status(401);
    next(new Error("Unauthorized"));
  }
};
export default protect;
