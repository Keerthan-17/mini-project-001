import type { Request, Response, NextFunction } from "express";
import { getAllSubmissions } from "../services/submission.service.js";
import { paginationSchema } from "../validators/admin.validator.js";
import { sendSuccess } from "../utils/response.js";

export async function getAdminSubmissions(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const { page, limit } = paginationSchema.parse(req.query);

    const result = await getAllSubmissions(page, limit);

    return sendSuccess(res, 200, "Submissions fetched successfully", result);
  } catch (error) {
    next(error);
  }
}
