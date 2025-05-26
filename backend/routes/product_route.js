// ERROR 1: Wrong import path for controllers
// Should use relative path from routes to backend/controllers
import { updateProduct, deleteProduct, getProducts, createProduct } from "../controllers/product.controller.js";
import express from "express";
const router = express.Router();

// Routes are correctly defined, no errors here
router.post("/", createProduct);
router.delete("/:id", deleteProduct);
router.put("/:id", updateProduct);
router.get("/", getProducts);

export default router;
