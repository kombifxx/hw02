import { body, param } from "express-validator";
export const postValidation = [
  body("title")
    .exists()
    .withMessage("Title is required")
    .isString()
    .withMessage("Title must be a string")
    .trim()
    .notEmpty()
    .withMessage("Title is required")
    .isLength({ max: 30 }),

  body("shortDescription")
    .exists()
    .withMessage("ShortDescription is required")
    .isString()
    .withMessage("ShortDescription must be a string")
    .trim()
    .notEmpty()
    .withMessage("ShortDescription is required")
    .isLength({ max: 100 }),

  body("content")
    .exists()
    .withMessage("Content is required")
    .isString()
    .withMessage("Content must be a string")
    .trim()
    .notEmpty()
    .withMessage("Content is required")
    .isLength({ max: 1000 }),
  body("blogId")
    .exists()
    .withMessage("blogId is required")
    .isString()
    .withMessage("blogId must be string"),
];
export const idValidation = [
  param("id")
    .exists()
    .withMessage("ID cannot be empty")
    .isString()
    .withMessage("ID should be a string")
    .isNumeric()
    .withMessage("ID should be a number"),
];
