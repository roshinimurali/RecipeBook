import express from "express";
import { createUser } from "../controllers/usersControllers.js";
import {
  validateUsers,
  validateFullUserRules,
} from "../middleware/userValidator.js";

const router = express.Router();

router.post("/create", validateFullUserRules, validateUsers, createUser);

export default router;
