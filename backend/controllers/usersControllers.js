import statusCodes from "http-status-codes";
import bcrypt from "bcrypt";
import Users from "../models/Users.js";

/**
 * Function to create users
 * @param {*} req
 * @param {*} res
 */
export const createUser = async (req, res) => {
  // Hash Password
  const hashedPassword = await bcrypt.hash(req.body.password, 12);
  try {
    const { firstName, lastName, email, password } = req.body;

    const newUser = await Users.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    if (!newUser) {
      return res
        .status(statusCodes.BAD_REQUEST)
        .json({ error: "New user has been created!" });
    }

    return res
      .status(statusCodes.CREATED)
      .json({ message: "User created!", newUser });
  } catch (error) {
    return res
      .status(statusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "INTERNAL SERVER ERROR" });
  }
};
