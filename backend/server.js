/**
 * here we initialize the express instance and add the necessary middlwares and the routes...
 */

import express from "express";
import colors from "colors";
import cors from "cors";

//importing the routes...
import router from "./routes/restaurantsRoutes.js";
const app = express();

//using cors so we can make request from other domains
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1/restaurants", router);
//serv frontend
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));
  app.get("*", (req, res) =>
    res.sendFile(
      path.resolve(__dirname, "../", "frontend", "build", "index.html")
    )
  );
} else {
  app.get("/", (req, res) => res.send("Please set to production"));
}

export default app;
