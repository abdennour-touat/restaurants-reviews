import mongoose from "mongoose";

const restaurantSchema = mongoose.Schema({
  name: {
    type: String,
    sparse: true,
    index: true,
  },
  cuisine: String,
  address: {
    zipcode: String,
  },
  borough: String,
  grades: [
    {
      date: Date,
      grade: String,
      score: Number,
    },
  ],
  reviews: [
    {
      restaurant_id: mongoose.Schema.Types.ObjectId,
      text: String,
      user_id: mongoose.Schema.Types.ObjectId,
      name: String,
    },
  ],
});

restaurantSchema.index({ name: "text" });
export default mongoose.model("restaurants", restaurantSchema);
