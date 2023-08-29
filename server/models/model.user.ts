import mongoose, { Schema } from "mongoose";
import bcrypt from "bcryptjs";

interface UserProps extends Document {
  name: string;
  email: string;
  password: string;
  imageUrl: string;
  createdAt: string;
  onboarding: boolean;
  username: string;
}

const userSchema: Schema<UserProps> = new mongoose.Schema({
  name: {
    type: "String",
    required: true,
    default: "",
  },
  username: {
    type: "String",
    default: "",
  },
  email: {
    type: "String",
    required: true,
    default: "",
  },
  password: {
    type: "String",
    required: true,
    default: "",
  },
  imageUrl: {
    type: "String",
    default: "",
  },
  createdAt: {
    type: "String",
    default: "",
  },
  onboarding: {
    type: "Boolean",
    default: false,
  },
});

userSchema.methods.matchPassword = async function (password: string) {
  return await bcrypt.compare(password, this.password);
};

userSchema.pre("save", async function (next) {
  if (!this.isModified) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User =
  mongoose.models.User || mongoose.model<UserProps>("User", userSchema);
export default User;
