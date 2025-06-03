// models/Category.js
import mongoose from 'mongoose';


const categorySchema = new mongoose.Schema({
  category_id: {
    type: String,
    required: true,
    unique: true,
  },
  category_name: {
    type: String,
    required: true,
  },
  image: String, // optional field if you want to keep images
  gender: String, // e.g., 'men', 'women', 'kids'
});

export default mongoose.model('Category', categorySchema);
