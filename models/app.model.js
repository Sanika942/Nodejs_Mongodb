const mongoose = require("mongoose");
const AppSchema = mongoose.Schema({
  name: {
    type: String,
    require: [true, "A tour must have a name"],
    unique: [true, "name already exists"],
    maxlength: [20, "A tour name must have less or equal to 20 char"],
    minlenght: [10, "A tpur name must have greater or equal to 10 char"],
  },
  price: {
    type: Number,
    required: [true, "A tour must have a price"],
  },
  rating: {
    type: Number,
    default: 4.5,
    min: [1, "Rating must be above 1.0"],
    max: [5, "Rating must be below 5.0"],
  },
  difficulty: {
    type: String,
    required: [true, "A tour must have a difficulty"],
    enum: {
      values: ["easy", "medium", "difficulty"],
      message: "Difficulty is either:easy,medium,dificult",
    },
  },
});
module.exports = mongoose.model("tours", AppSchema);

