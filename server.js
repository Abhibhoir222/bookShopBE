import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
import app from "./app.js";

const PORT = process.env.PORT || 8000;

const MONGO_URI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_CLUSTER}/${process.env.DB_NAME}`;

mongoose
  .connect(MONGO_URI,{family: 4,})
  .then(() => {
    console.log(`DB connected: ${process.env.DB_NAME}`);
  })
  .catch((error) => {
    console.error("DB connection failed", error.message);
    process.exit(1);
  });

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
