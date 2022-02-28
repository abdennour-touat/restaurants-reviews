import asyncHandler from "express-async-handler";
import restaurant from "../models/restaurantModel.js";

//@desc search a restaurant by name
//method GET /api/v1/restaurants
const searchRestaurant = asyncHandler(async (req, res) => {
  if (!req.body) {
    res.status(400);
    throw new Error("no constraints specified");
  }
  const response = await restaurant.find({
    $text: { $search: req.body.name },
  });
  res.status(200).json(response);
});
//@desc add a new grade
//method POST /api/v1/restaurants/:id
const addGrade = asyncHandler(async (req, res) => {
  const { grade, score } = req.body;
  if (!grade || !score) {
    res.status(400);
    throw new Error("Please add a grade");
  }
  const restaurant = await restaurant.findById(req.params.id);
  if (!restaurant) {
    res.status(400);
    throw new Error("restaurant doesn't exit");
  }
  req.body.date = new Date();
  restaurant.grades.push(req.body);
  const newRestaurant = await restaurant.findByIdAndUpdate(
    req.params.id,
    restaurant,
    {
      new: true,
    }
  );
  res.status(200).json(newRestaurant);
});
//@desc delete a grade
//method DELETE /api/v1/restaurants/:id
const deleteGrade = asyncHandler(async (req, res) => {
  if (!req.body) {
    res.status(400);
    throw new Error("no review specified");
  }

  const restaurant = await restaurant.findById(req.params.id);
  if (!restaurant) {
    res.status(400);
    throw new Error("restaurant doesn't exist");
  }
  restaurant.grades = grade.grades.filter((gr) => {
    return String(gr._id) !== req.body.id;
  });

  const newRestaurant = await restaurant.findByIdAndUpdate(
    req.params.id,
    restaurant,
    {
      new: true,
    }
  );
  res.status(200).json(newRestaurant);
});
//@desc update a grade
//method PUT /api/v1/restaurants/:id
const updateGrade = asyncHandler(async (req, res) => {
  const { grade, score } = req.body;
  if (!grade || !score) {
    res.status(200);
    throw new Error("Please modify a grade");
  }
  const restaurant = await restaurant.findById(req.params.id);
  for (let i = 0; i < restaurant.grades.length; i++) {
    if (String(restaurant.grades[i]._id) === req.body.id) {
      restaurant.grades[i].date = new Date();
      restaurant.grades[i].score = req.body.score;
      restaurant.grades[i].grade = req.body.grade;
      break;
    }
  }
  const newRestaurant = await restaurant.findByIdAndUpdate(
    req.params.id,
    restaurant,
    { new: true }
  );
  res.status(200).json(newRestaurant);
});
//@desc get the cuisine types
//method GET /api/v1/restaurants/cuisines
const getCuisines = asyncHandler(async (req, res) => {
  const cuisines = await restaurant.find().distinct("cuisine");
  if (cuisines) {
    res.json(cuisines);
  }
  res.json([]);
});

export { searchRestaurant, addGrade, deleteGrade, updateGrade, getCuisines };
