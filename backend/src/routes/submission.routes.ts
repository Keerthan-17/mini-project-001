import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import {
  submitForm,
  getMySubmissions,
} from "../controllers/submission.controller.js";

const router = Router();

router.post("/", authMiddleware, submitForm);
router.get("/", authMiddleware, getMySubmissions);

export default router;
