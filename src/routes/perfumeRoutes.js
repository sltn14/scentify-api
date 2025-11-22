import express from "express";
import { PerfumeController } from "../controllers/perfumeController.js";
const router = express.Router();

router.get("/", PerfumeController.getAll);
router.get("/:id", PerfumeController.getById);
router.post("/", PerfumeController.create);
router.put("/:id", PerfumeController.update);
router.delete("/:id", PerfumeController.remove);

export default router;