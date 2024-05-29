/** @format */

import mongoose from "mongoose";

export const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI!, {
      dbName: "auth-app",
    })
    .then(() => {
      console.log("Connected to Mongoose");
    })
    .catch((error: any) => {
      console.log(`some error occurred: ${error}`);
    });
};
