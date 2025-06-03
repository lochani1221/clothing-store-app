import express from 'express';
import multer from 'multer';
import path from 'path';
import mongoose from 'mongoose';
import Category from '../models/Category.js';

const router = express.Router();

// Setup multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Ensure this folder exists
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage });

// GET all categories
router.get('/', async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch categories', error: err });
  }
});

// POST new category with image
router.post('/add', upload.single('image'), async (req, res) => {
  try {
    const { category_id, category_name } = req.body;
    const image = req.file ? req.file.filename : null;

    const newCat = new Category({
      category_id,
      category_name,
      image,
    });

    await newCat.save();
    res.status(201).json({ message: 'Category added', category: newCat });
  } catch (err) {
    res.status(500).json({ message: 'Failed to add category', error: err });
  }
});

// PUT update a category by _id (with optional new image)
router.put('/:id', upload.single('image'), async (req, res) => {
  try {
    const { category_id, category_name } = req.body;
    const updateData = { category_id, category_name };

    if (req.file) {
      updateData.image = req.file.filename;
    }

    const objectId = new mongoose.Types.ObjectId(req.params.id);
    const updatedCategory = await Category.findByIdAndUpdate(
      objectId,
      updateData,
      { new: true }
    );

    if (!updatedCategory) {
      return res.status(404).json({ message: 'Category not found' });
    }

    res.json({ message: 'Category updated', category: updatedCategory });
  } catch (err) {
    res.status(500).json({ message: 'Failed to update category', error: err });
  }
});

// DELETE a category by _id
router.delete('/:id', async (req, res) => {
  try {
    const deletedCategory = await Category.findByIdAndDelete(req.params.id);
    if (!deletedCategory) {
      return res.status(404).json({ message: 'Category not found' });
    }
    res.json({ message: 'Category deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete category', error: err });
  }
});

export default router;
