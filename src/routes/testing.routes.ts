import { Router } from "express";
import { testingController } from "../controllers/testing.controller";
import { guardMiddleware } from "../middlewares/auth.middleware";

export const testingRouter = Router();
testingRouter.delete("/all-data", guardMiddleware, testingController.deleteAll);
