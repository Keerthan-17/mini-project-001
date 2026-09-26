import type { Request, Response, NextFunction } from "express";
import { signupSchema, loginSchema } from "../validators/auth.validator.js";
import { signupUser, loginUser } from "../services/auth.service.js";
import { sendSuccess } from "../utils/response.js";

export async function signup(req: Request, res: Response, next: NextFunction) {
  try {
    const validatedData = signupSchema.parse(req.body);

    const user = await signupUser(validatedData);

    return sendSuccess(res, 201, "User registered successfully", {
      user,
    });
  } catch (error) {
    next(error);
  }
}

export async function login(req: Request, res: Response, next: NextFunction) {
  try {
    const validatedData = loginSchema.parse(req.body);

    const result = await loginUser(validatedData);

    return sendSuccess(res, 200, "Login successful", result);
  } catch (error) {
    next(error);
  }
}

export function getMe(req: Request, res: Response) {
  return sendSuccess(res, 200, "Authenticated successfully", {
    user: req.user,
  });
}

export function adminTest(req: Request, res: Response) {
  return res.status(200).json({
    success: true,
    message: "Welcome Admin",
    user: req.user,
  });
}
