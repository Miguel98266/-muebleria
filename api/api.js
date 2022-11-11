import express from "express";
import authRoutes from "./routes/authRoutes.js"
import propertyRoutes from "./routes/propertyRoutes.js"
import contactRoutes from "./routes/contactRoutes.js"
import { authValidator } from "./middlewares/authValidator.js";
const api = express();
api.use(express.json())
api.use(express.urlencoded({extended: true})); 


api.get("/status", (req, res) => {
  res.json({
    msg: "API en linea funcionando",
  });
});

api.use('/auth',authRoutes)
api.use('/properties',propertyRoutes)
api.use('/contact',authValidator,contactRoutes)
export default api;
