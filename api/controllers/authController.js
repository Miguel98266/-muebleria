import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jwt-simple";
import config from "../config/index.js";
import { transporter } from "../config/mailer.js";
import UserService from "../services/user.js";
import { email } from "../../templateEmail.js";
const userService = new UserService();

const register = async (req, res) => {
  try {
    const hashed = await bcrypt.hash(req.body.password, 10);
    req.body.password = hashed;
    const user = await userService.create(req.body);
    // Reescribimos la variable password para no mandarla
    user.password = undefined;
    const payload = {
      userId: user.id,
    };
    const token = jwt.encode(payload, config.jwtSecret);
    console.log(config.server.url);
    const templateemail = email(user, config.server.url, token);
    console.log(templateemail);
    let info = await transporter.sendMail({
      from: '"Verify User" <miguel98266@gmail.com>', // sender address
      to: user.email, // list of receivers
      subject: "Verify User", // Subject line
      html: templateemail,
    });
    return res.status(201).json({
      msj: "User created successfully",
      user,
    });
  } catch (error) {
    return res.status(500).json({
      msj: "Failed to create user, please try again later",
      error,
    });
  }
};

const verifyUser = async (req, res) => {
  try {
    const { id } = req.params;

    const token = jwt.decode(id, config.jwtSecret);
    const { userId } = token;

    const verify = await userService.update(userId, {
      isVerified: true,
    });
    return res.json({
      msg: "The user was successfully verified",
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Error verifying user",
      error,
    });
  }
};

const login = async (req, res) => {
  const { body } = req;
  if (!body.email || !body.password) {
    return res.status(400).json({
      msg: "Enter email and password",
    });
  }
  try {
    const user = await userService.findone({ email: body.email });
    if (!user) {
      return res.status(401).json({
        msg: "Invalid credentials",
      });
    }
    const isValid = await bcrypt.compare(body.password, user.password);
    if (!isValid) {
      return res.status(403).json({
        msg: "Invalid credentials",
      });
    }
    const payload = {
      userId: user.id,
      rol: user.rol,
    };
    const token = jwt.encode(payload, config.jwtSecret);
    return res.json({
      msg: "Successful login",
      token,
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Error verifying user",
      error,
    });
  }
};
export { register, verifyUser, login };
