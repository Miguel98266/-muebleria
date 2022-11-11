import express from "express";
import createContactValidator from "../middlewares/createContactValidator.js";
import {
  create,
  readContactbyProperty,
} from "../controllers/contactController.js";
const router = express.Router();

router.route("/").post(createContactValidator, create);
router.route("/:id").get(readContactbyProperty);
export default router;
