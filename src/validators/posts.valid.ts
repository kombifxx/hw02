import { body, param } from "express-validator";
export const postValidation = [
  body("title")
    .exists()
    .withMessage("Name cannot be empty")
    .isString()
    .withMessage("Name should be a string")
    .isLength({ max: 30 })
    .withMessage("Name should be less than 30 characters"),
  body("shortDescription")
    .exists()
    .withMessage("Description cannot be empty")
    .isString()
    .withMessage("Description should be a string")
    .isLength({ max: 100 })
    .withMessage("Description should be less than 100 characters"),
  body("content")
    .exists()
    .withMessage("WebsiteUrl cannot be empty")
    .isString()
    .withMessage("WebsiteUrl should be a string")
    .isLength({ max: 1000 })
    .withMessage("Website should be less than 1000 characters"),
    body('blogId')
        .exists().withMessage('blogId is required')
        .isString().withMessage('blogId must be string')
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
