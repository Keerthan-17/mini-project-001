import type { Request, Response, NextFunction } from "express";
import { createSubmissionSchema } from "../validators/submission.validator.js";
import { createSubmission } from "../services/submission.service.js";

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
