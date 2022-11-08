import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jwt-simple";
import config from "../config/index.js";
import { transporter } from "../config/mailer.js";

const register = async (req, res) => {
  try {
    const hashed = await bcrypt.hash(req.body.password, 10);
    req.body.password = hashed;
    const user = await User.create(req.body);
    // Reescribimos la variable password para no mandarla
    user.password = undefined;
    const payload = {
      userId: user.id,
    };
    const token = jwt.encode(payload, config.jwtSecret);
    
    let info = await transporter.sendMail({
      from: '"Verify User" <miguel98266@gmail.com>', // sender address
      to: user.email, // list of receivers
      subject: "Verify User", // Subject line
      html: `
        <b> Please click on the following link , to verify your user </b>
        <a href="https://www.google.com.mx/">Verification Link</a>
        `,
    });
    return res.json({
      msj: "Usuario creado Exitosamente",
      user,
    });
  } catch (error) {
    return res.status(500).json({
      msj: "Error al registrar usuario, intente mas tarde",
      error,
    });
  }
};
const verifyUser = async (req, res) => {
  try {
  } catch (error) {}
};
export { register, verifyUser };
