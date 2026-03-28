import { body, param } from "express-validator";
export const postValidation = [
    body('title')
        .trim()
        .notEmpty().withMessage('Title is required')
        .bail()
        .isString().withMessage('Title must be string')
        .bail()
        .isLength({ max: 30 }).withMessage('Title max 30'),

  body("shortDescription")
    .exists()
    .withMessage("Description cannot be empty")
    .isString()
    .withMessage("Description should be a string")
    .isLength({ max: 100 })
    .withMessage("Description should be less than 100 characters"),
    body('content')
        .trim()
        .notEmpty().withMessage('Content is required')
        .bail()
        .isString().withMessage('Content must be string')
        .bail()
        .isLength({ max: 1000 }).withMessage('Content max 1000'),
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
