import type { Request, Response, NextFunction } from "express";
import { createSubmissionSchema } from "../validators/submission.validator.js";
import {
  createSubmission,
  getUserSubmissions,
} from "../services/submission.service.js";
import { sendSuccess } from "../utils/response.js";

export async function submitForm(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const validatedData = createSubmissionSchema.parse(req.body);

    const userId = req.user!.userId;

    const submission = await createSubmission(userId, validatedData);

    return sendSuccess(res, 201, "Form submitted successfully", {
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

    return sendSuccess(res, 200, "Submissions fetched successfully", {
      submissions,
    });
  } catch (error) {
    next(error);
  }
}
