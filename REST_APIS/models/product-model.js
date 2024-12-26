const mongoose = require("mongoose");
const { Schema } = mongoose;

// Define the schema
const productSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  category: { type: String },
  price: { type: Number, required: true },
  discountPercentage: { type: Number },
  rating: { type: Number },
  stock: { type: Number },
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
