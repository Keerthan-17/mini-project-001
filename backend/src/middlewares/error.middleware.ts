import type { Request, Response, NextFunction } from "express";

export function errorHandler(
  error: unknown,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  console.error(error);

  if (error instanceof Error) {
    return res.status(400).json({
      message: error.message,
    });
  }

  return res.status(500).json({
    message: "Internal server error",
  });
}
