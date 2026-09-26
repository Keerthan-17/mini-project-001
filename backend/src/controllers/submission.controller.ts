import type { Request, Response, NextFunction } from "express";
import { createSubmissionSchema } from "../validators/submission.validator.js";
import {
  createSubmission,
  getUserSubmissions,
} from "../services/submission.service.js";

export async function submitForm(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const validatedData = createSubmissionSchema.parse(req.body);

    const userId = req.user!.userId;

    const submission = await createSubmission(userId, validatedData);

    return res.status(201).json({
      success: true,
      message: "Form submitted successfully",
      submission,
    });
  } catch (error) {
    next(error);
  }
}

export async function getMySubmissions(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const userId = req.user!.userId;

    const submissions = await getUserSubmissions(userId);

    return res.status(200).json({
      success: true,
      submissions,
    });
  } catch (error) {
    next(error);
  }
}
