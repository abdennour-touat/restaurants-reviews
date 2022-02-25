import asyncHandler from "express-async-handler";
import restaurant from "../models/restaurantModel.js";

const getRestaurants = asyncHandler(async (req, res) => {
  const test = await restaurant.findById("5eb3d668b31de5d588f4292b");
  res.status(200).json(test);
});

export { getRestaurants };
