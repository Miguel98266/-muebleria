import express from "express";
import * as propertyController from "../controllers/propertyController.js";
import { authValidator } from "../middlewares/authValidator.js";
import uploadMiddleware from "../uploadImg/storage.js";

import * as contactController from "../controllers/contactController.js";
import createPropertyValidator from "../middlewares/createPropertyValidator.js";
import createContactValidator from "../middlewares/createContactValidator.js";

const router = express.Router();

router
  .route("/")
  .post(
    authValidator,
    uploadMiddleware.array("files"),
    createPropertyValidator,
    propertyController.create
  )
  .get(propertyController.findFilter);
router.route("/:id").get(propertyController.readByid);

router
  .route("/:id/contact")
  .post(authValidator, createContactValidator, contactController.create)
  .get(authValidator, contactController.readContactbyProperty);

export default router;
