import mongoose from "mongoose";

const connectDatabase = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URL) {
    return console.log("MONGODB_URL NOT FOUND");
  } else {
    try {
      await mongoose.connect(process.env.MONGODB_URL);
    } catch (err) {
      console.log(err);
    }
  }
};

export default connectDatabase;
