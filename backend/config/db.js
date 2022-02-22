/**
 * here we make the connection function so we can access our mongodb database
 */

import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_URI);
    console.log(
      `connected to the database ${conn.connection.host}`.america.underline
    );
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
export default connectDb;
