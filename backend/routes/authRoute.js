import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

import {
  registerController,
  loginController,
  testController,
} from "../controllers/authController.js";

const router = express.Router();

//REGISTER
router.post("/register", registerController);

//LOGIN
router.post("/login", loginController);

//TEST ROUTES
router.get("/test", requireSignIn, isAdmin, testController);

export default router;
