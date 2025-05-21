import { Request, Response, NextFunction } from "express";
import { ZodTypeAny } from "zod";

export const validateBody = <T extends ZodTypeAny>(schema: T) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
      const errors = result.error.issues.map(issue => ({
        field: issue.path.join(".") || "unknown",
        message: issue.message,
      }));

      res.status(400).json({
        success: false,
        errors,
      });
      return;
    }
    req.body = result.data;
    next();
  };
};
