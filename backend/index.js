/**
 * index.js to connect the database and to start the server
 * the connectDb method is imported from ./config/db.js
 * the app instance is imported from the server.js file
 */

import app from "./server.js";
import connectDb from "./config/db.js";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT || 8000;
connectDb();
app.listen(port, () => {
  console.log(`Server started at port ${port}`.green);
});
