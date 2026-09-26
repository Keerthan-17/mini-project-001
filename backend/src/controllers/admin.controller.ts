import type { Request, Response, NextFunction } from "express";
import { getAllSubmissions } from "../services/submission.service.js";

export async function getAdminSubmissions(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const submissions = await getAllSubmissions();

    return res.status(200).json({
      success: true,
      submissions,
    });
  } catch (error) {
    next(error);
  }
}
