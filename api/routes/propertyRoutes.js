import express from "express";
import { create,findFilter,readByid } from "../controllers/propertyController.js";

const router = express.Router();

router.route("/").post(create).get(findFilter);
router.route("/:id").get(readByid);
export default router