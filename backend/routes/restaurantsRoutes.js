import express from "express";

const router = express.Router();

import { getRestaurants } from "../controllers/restaurantsControllers.js";

router.route("/").get(getRestaurants);

export default router;
