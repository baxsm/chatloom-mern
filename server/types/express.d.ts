import { Request } from "express";

declare global {
  namespace Express {
    interface Request {
      user: {
        name: string;
        email: string;
        password: string;
        imageUrl: string;
        createdAt: string;
        onboarding: boolean;
      };
    }
  }
}