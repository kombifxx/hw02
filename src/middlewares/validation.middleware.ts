import { validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";
export const inputValidationMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const formattedErrors: any[] = [];

    for (const e of errors.array()) {
      const field = (e as any).path;

      const alreadyExists = formattedErrors.find((err) => err.field === field);

      if (!alreadyExists) {
        formattedErrors.push({
          message: e.msg,
          field,
        });
      }
    }

    return res.status(400).send({
      errorsMessages: formattedErrors,
    });
  }

  next();
};
