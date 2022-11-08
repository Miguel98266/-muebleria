import express from "express";
import authRoutes from "./routes/authRoutes.js"

const api = express();
api.use(express.json())


api.get("/status", (req, res) => {
  res.json({
    msg: "API en linea funcionando",
  });
});

api.use(authRoutes)
export default api;
