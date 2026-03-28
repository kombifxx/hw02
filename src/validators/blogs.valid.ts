import { body, param } from "express-validator";
export const blogValidation = [
  body("name")
    .exists()
    .withMessage("Name cannot be empty")
    .isString()
    .withMessage("Name should be a string")
    .isLength({ max: 15 })
    .withMessage("Name should be less than 15 characters"),
  body("description")
    .exists()
    .withMessage("Description cannot be empty")
    .isString()
    .withMessage("Description should be a string")
    .isLength({ max: 500 })
    .withMessage("Description should be less than 500 characters"),
  body("websiteUrl")
    .exists()
    .withMessage("WebsiteUrl cannot be empty")
    .isString()
    .withMessage("WebsiteUrl should be a string")
    .matches(
      /^https:\/\/([a-zA-Z0-9_-]+\.)+[a-zA-Z0-9_-]+(\/[a-zA-Z0-9_-]+)*\/?$/,
    )
    .withMessage("websiteUrl is not valid")
    .isLength({ max: 100 })
    .withMessage("Website should be less than 100 characters"),
];
export const idValidation = [
  param("id")
    .exists()
    .withMessage("ID cannot be empty")
    .isString()
    .withMessage("ID should be a string")
    .withMessage("ID should be a number"),
];
