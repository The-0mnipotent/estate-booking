import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/User.route.js";
dotenv.config();

mongoose.connect(process.env.MONGO_URL).then(() => {
  console.log("Connected to Database!");
});
const app = express();
app.use(express.json());
app.use("/api/user", userRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000!");
});
