import express from "express";
import { BrandController } from "../controllers/brandController.js";
const router = express.Router();

router.get("/", BrandController.getAll);
router.get("/:id", BrandController.getById);
router.post("/", BrandController.create);
router.put("/:id", BrandController.update);
router.delete("/:id", BrandController.remove);

export default router;
