import express from "express";
import { listReviews, createReview } from "../controllers/reviewController.js";

const router = express.Router();

// GET /api/reviews/:id  → list review untuk 1 perfume
router.get("/:id", listReviews);

// POST /api/reviews/:id → tambah review
router.post("/:id", createReview);

export default router;
