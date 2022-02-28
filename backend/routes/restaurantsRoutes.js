import express from "express";

const router = express.Router();

import {
  addGrade,
  deleteGrade,
  getCuisines,
  searchRestaurant,
  updateGrade,
} from "../controllers/restaurantsControllers.js";

router.route("/").get(searchRestaurant);

router.route("/review/:id").post(addGrade).put(updateGrade).delete(deleteGrade);
router.route("/cuisines").get(getCuisines);

export default router;
