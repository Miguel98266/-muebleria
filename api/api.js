import express from "express";


const api = express();
api.use(express.json())


api.get("/status", (req, res) => {
  res.json({
    msg: "API en linea funcionando",
  });
});


// api.use(userRoutes)
export default api;
