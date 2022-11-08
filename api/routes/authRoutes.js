import express from "express"
import { login, register, verifyUser } from "../controllers/authController.js"
import { createUserValidator } from "../middlewares/createUserValidator.js";
const router= express.Router();

router.route('/register').post(createUserValidator,register);
router.route('/verify/:id').get(verifyUser);
router.route('/login').post(login);
export default router;