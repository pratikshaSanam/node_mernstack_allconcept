//schema
const mongoose = require('mongoose');
const { Schema } = mongoose;



const productSchema = new Schema({
  title: String,
  description: String,
  category: String,
  price: Number,
  discountPercentage: Number,
  rating: Number,
  brand: String,
  thumbnail: String,
  images: [String],
});

//creteing model in mongo
exports.Product = mongoose.model('Product', productSchema);