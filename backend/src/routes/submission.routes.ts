import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { submitForm } from "../controllers/submission.controller.js";

const router = Router();

router.post("/", authMiddleware, submitForm);

export default router;
