import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  photoUrl: { type: String, required: true }, // store image URL or path here
}, { timestamps: true });

export default mongoose.model("Product", productSchema);
