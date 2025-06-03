import express from "express";
import multer from "multer";
import Product from "../models/Product.js";
import path from "path";

const router = express.Router();

// Configure multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploads"); // Make sure this folder exists
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});
const upload = multer({ storage });

// POST route with image upload
router.post("/", upload.single("photo"), async (req, res) => {
  const { name, price, category, description } = req.body;
  const photo = req.file;

  if (!name || !price || !category || !description || !photo) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const product = new Product({
      name,
      price,
      category,
      description,
      photoUrl: `/uploads/${photo.filename}`,
    });

    const saved = await product.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// GET all products (optionally filtered by category)
router.get("/", async (req, res) => {
  try {
    const { category } = req.query;

    let filter = {};
    if (category) {
      filter.category = { $regex: new RegExp(category, "i") };
    }

    const products = await Product.find(filter);
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch products", error });
  }
});

// Export the router as default export
export default router;
