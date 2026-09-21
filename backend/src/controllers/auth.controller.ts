import type { Request, Response, NextFunction } from "express";
import { signupSchema } from "../validators/auth.validator.js";
import { signupUser } from "../services/auth.service.js";

export async function signup(req: Request, res: Response, next: NextFunction) {
  try {
    const validatedData = signupSchema.parse(req.body);

    const user = await signupUser(validatedData);

    return res.status(201).json({
      message: "User registered successfully",
      user,
    });
  } catch (error) {
    next(error);
  }
}
