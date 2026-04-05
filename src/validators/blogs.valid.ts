import { body } from "express-validator";
export const blogValidation = [
  body("websiteUrl")
    .trim()
    .notEmpty()
    .withMessage("WebsiteUrl cannot be empty")
    .bail()
    .isString()
    .withMessage("WebsiteUrl should be a string")
    .bail()
    .matches(
      /^https:\/\/([a-zA-Z0-9_-]+\.)+[a-zA-Z0-9_-]+(\/[a-zA-Z0-9_-]+)*\/?$/,
    )
    .withMessage("websiteUrl is not valid")
    .bail()
    .isLength({ max: 100 })
    .withMessage("Website should be less than 100 characters"),
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Name cannot be empty")
    .bail()
    .isString()
    .withMessage("Name should be a string")
    .bail()
    .isLength({ max: 15 })
    .withMessage("Name should be less than 15 characters"),
  body("description")
    .exists()
    .withMessage("Description cannot be empty")
    .isString()
    .withMessage("Description should be a string")
    .isLength({ max: 500 })
    .withMessage("Description should be less than 500 characters"),
];
