import { body, validationResult } from "express-validator";
import statusCodes from "http-status-codes";
import {
  checkUserExistence,
  upperCaseFirstLetter,
} from "../helper/UserHelper.js";

/**
 * Validation of users registering the app
 */
export const validateFullUserRules = [
  // Sanitize the First and last name
  body(["firstName", "lastName"])
    .trim()
    .isAlpha()
    .custom((value) => upperCaseFirstLetter(value)),

  /* Sanitizes the password */
  body("password")
    .isStrongPassword()
    .withMessage(
      "Password needs to contain at least 8 characters, minimum one lower case character, minimum one uppercase character, minimum one number and minimum one symbol."
    ),

  /* Sanitizes the email */
  body("email")
    .trim()
    .normalizeEmail({ gmail_remove_subaddress: true })
    .isEmail()

    // Custom Validator to check if the user already exists in Database
    .custom(async (value) => checkUserExistence(value)),
];

// Middleware that catches the error
export const validateUsers = (req, res, next) => {
  // Extract the validation errors from the request object
  const errors = validationResult(req);
  // If there are errors
  if (!errors.isEmpty()) {
    // Response code 400
    return res.status(statusCodes.BAD_REQUEST).json({ errors: errors.array() });
  }

  next();
};
