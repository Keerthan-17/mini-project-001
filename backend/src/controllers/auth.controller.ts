import type { Request, Response, NextFunction } from "express";
import { signupSchema, loginSchema } from "../validators/auth.validator.js";
import { signupUser, loginUser } from "../services/auth.service.js";

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

export async function login(req: Request, res: Response, next: NextFunction) {
  try {
    const validatedData = loginSchema.parse(req.body);

    const result = await loginUser(validatedData);

    return res.status(200).json({
      success: true,
      message: "Login successful",
      ...result,
    });
  } catch (error) {
    next(error);
  }
}

export function getMe(req: Request, res: Response) {
  return res.status(200).json({
    success: true,
    message: "You are authenticated",
    user: req.user,
  });
}
