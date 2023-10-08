import Users from "../models/Users.js";

/**
 * Helper to uppercase first letter
 * @param {*} word
 * @returns
 */
export const upperCaseFirstLetter = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

export const checkUserExistence = async (value) => {
  const existedUser = await Users.findOne({ email: value });

  if (existedUser) {
    throw new Error("A user already exists with this email address");
  }
};
