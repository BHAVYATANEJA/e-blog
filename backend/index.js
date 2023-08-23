import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import morgan from "morgan";
import authRoutes from "./routes/authRoute.js";
import cors from "cors";

const PORT = process.env.PORT || 8080;

const app = express();
dotenv.config();
connectDB();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.use("/api/v1/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("<h1>Hi</h1>");
});

app.listen(PORT, () => {
  console.log(
    `Server running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan
      .white
  );
});
