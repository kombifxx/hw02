import { Router } from "express";
import { blogValidation } from "../validators/blogs.valid";
import { inputValidationMiddleware } from "../middlewares/validation.middleware";
import { blogsController } from "../controllers/blogs.controller";
import { guardMiddleware } from "../middlewares/auth.middleware";

export const BlogsRouter = Router();
BlogsRouter.get("/", blogsController.getAll)
  .get("/:id", blogsController.getById)
  .post(
    "/",
    guardMiddleware,
    blogValidation,
    inputValidationMiddleware,
    blogsController.create,
  )
  .put(
    "/:id",
    guardMiddleware,
    blogValidation,
    inputValidationMiddleware,
    blogsController.update,
  )
  .delete(
    "/:id",
    guardMiddleware,
    inputValidationMiddleware,
    blogsController.deleteById,
  );
