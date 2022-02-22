/**
 * here we initialize the express instance and add the necessary middlwares and the routes...
 */

import express from "express";
import colors from "colors";
import cors from "cors";

const app = express();

//using cors so we can make request from other domains
app.use(cors());
app.use(express.json());

app.use("/api/v1/restaurants", (req, res) => {
  res.status(200).json({ message: "connected" });
});
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
