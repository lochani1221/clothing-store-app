// routes/authRoutes.js
import express from "express";
import {
  registerController,
  loginController
} from "../controllers/authController.js";
import { requireSignIn, isAdmin } from "../middlewares/authMiddleware.js";

const router = express.Router();

// 🔐 Auth Routes

// @route   POST /api/v1/auth/register
// @desc    Register a new user
router.post("/register", registerController);

// @route   POST /api/v1/auth/login
// @desc    Login existing user
router.post("/login", loginController);

// @route   GET /api/v1/auth/test
// @desc    Test route (protected, admin only)


export default router;
