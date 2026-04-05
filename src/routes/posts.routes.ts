import { Router } from "express";
import { postValidation } from "../validators/posts.valid";
import { inputValidationMiddleware } from "../middlewares/validation.middleware";
import { postsController } from "../controllers/posts.controller";
import { guardMiddleware } from "../middlewares/auth.middleware";

export const PostsRouter = Router();
PostsRouter.get("/", postsController.getAll)
  .get("/:id", postsController.getById)
  .post(
    "/",
    guardMiddleware,
    postValidation,
    inputValidationMiddleware,
    postsController.create,
  )
  .put(
    "/:id",
    guardMiddleware,
    postValidation,
    inputValidationMiddleware,
    postsController.update,
  )
  .delete(
    "/:id",
    guardMiddleware,
    inputValidationMiddleware,
    postsController.deleteById,
  );
