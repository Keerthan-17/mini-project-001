import type { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/AppError.js";

type Role = "USER" | "ADMIN";

export function authorizeRoles(...allowedRoles: Role[]) {
  return (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      if (!req.user) {
        throw new AppError("Authentication required", 401);
      }

      if (!allowedRoles.includes(req.user.role)) {
        throw new AppError("Access denied", 403);
      }

      next();
    } catch (error) {
      next(error);
    }
  };
}