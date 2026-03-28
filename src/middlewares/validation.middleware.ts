import { validationResult } from "express-validator";
import { Request, Response, NextFunction} from "express";
export const inputValidationMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(400).send({
            errorsMessages: errors.array().map(e => ({
                message: e.msg,
                field: (e as any).path
            }))
        })
    }

    next()
}
