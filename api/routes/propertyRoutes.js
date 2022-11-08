import express from "express";
import { create,findFilter,readByid } from "../controllers/propertyController.js";
import {authValidator} from "../middlewares/authValidator.js"
const router = express.Router();

router.route("/").post(authValidator,create).get(findFilter);
router.route("/:id").get(readByid);
export default router