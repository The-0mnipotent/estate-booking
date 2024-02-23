import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import authRouter from "./routes/Auth.route.js";
import userRouter from "./routes/User.route.js";
dotenv.config();

mongoose.connect(process.env.MONGO_URL).then(() => {
  console.log("Connected to Database!");
});
const app = express();
app.use(express.json());
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({ success: false, statusCode, message });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000!");
});
