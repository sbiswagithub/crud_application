import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv"; // Correct import statement
import cors from "cors";
import route from "./routes/userRoutes.js"; // Correct"

const app = express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config(); // Use dotenv without require

const PORT = process.env.PORT || 7000;
const URL = process.env.MONGOURL;

mongoose
  .connect(URL)
  .then(() => {
    console.log("DB connected successfully");

    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });
  })
  .catch((error) => console.log(error));

app.use("/api", route);
