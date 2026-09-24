import { Router } from "express";
import {
  signup,
  login,
  getMe,
  adminTest,
} from "../controllers/auth.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { authorizeRoles } from "../middlewares/role.middleware.js";

const router = Router();

router.post("/signup", signup);
router.post("/login", login);

router.get("/me", authMiddleware, getMe);

router.get("/admin-test", authMiddleware, authorizeRoles("ADMIN"), adminTest);

export default router;
