import express from "express";
import authRoutes from "./routes/authRoutes.js"
import propertyRoutes from "./routes/propertyRoutes.js"
import { authValidator } from "./middlewares/authValidator.js";
const api = express();
api.use(express.json())


api.get("/status", (req, res) => {
  res.json({
    msg: "API en linea funcionando",
  });
});

api.use('/auth',authRoutes)
api.use('/properties',propertyRoutes)
export default api;
