import jwt from "jsonwebtoken";

const generateToken = (id: string) => {
  if (process.env.JWT_SECRET) {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
      expiresIn: "2d",
    });
  } else {
    return null;
  }
};

export default generateToken;
