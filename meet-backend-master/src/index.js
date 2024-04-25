import express, { json } from "express";
import mongoose from "mongoose";
import { routes } from "../routes.js";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());
// mongodb+srv://<username>:<password>@cluster0.rwzui4d.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
const databaseurl =
  "mongodb+srv://pranavpadmakarjoshi8999:q5p0nNs9Ds5GSmMP@cluster0.rwzui4d.mongodb.net/meet";
mongoose.connect(databaseurl);
let database = mongoose.connection;
database.on("connected", () => {
  console.log("Database connected successfully");
  app.use(routes);
  app.get("/healthcheck", (req, res) => {
    console.log("Server is running");
    res.send("Server is up and running !");
  });

  app.post("/sendData", (req, res) => {
    console.log("Data being send by the client...", req.body);
    res.send("Data received successfully!");
  });

  app.listen(4000, () => {
    console.log("Server is running on port 4000");
  });
});
database.on("error", (err) => {
  console.log("Error whilr connecting to database", err);
});
