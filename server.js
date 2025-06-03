// server.js or index.js

import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import categoryRoutes from "./routes/category.js";
import productRoutes from "./routes/product.js"; 
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import userRoutes from "./routes/users.js";



// __dirname workaround for ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// configure env
dotenv.config();

// database config
connectDB();

// rest object
const app = express();
app.use("/api/users", userRoutes);


// middlewares
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());
app.use(morgan("dev"));

// static folder to serve uploaded files
app.use("/uploads", express.static(path.join(__dirname, "public/uploads"))); // ✅ Fix this
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/api/products', productRoutes);


// routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/products", productRoutes); // ✅ Corrected route mount

// test route
app.get("/", (req, res) => {
  res.send("<h1>Welcome to ecommerce app</h1>");
});

// PORT
const PORT = process.env.PORT || 8080;

// run server
app.listen(PORT, () => {
  console.log(
    `Server Running in ${process.env.NODE_ENV} mode on port ${PORT}`.bgCyan
      .white
  );
});
