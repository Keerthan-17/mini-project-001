import { Router } from "express";

import { authMiddleware } from "../middlewares/auth.middleware.js";
import { authorizeRoles } from "../middlewares/role.middleware.js";

import { getAdminSubmissions } from "../controllers/admin.controller.js";

const router = Router();

router.get(
  "/submissions",
  authMiddleware,
  authorizeRoles("ADMIN"),
  getAdminSubmissions,
);

export default router;
