import jwt from "jwt-simple";
import config from "../config/index.js";
import User from "../models/User.js";

const authValidator = async (req, res, next) => {
  const { authorization: token } = req.headers;
  if (!token) {
    return res.status(403).json({
      msg: "The header Authorization is missing",
    });
  }
  try {
    const payload = jwt.decode(token, config.jwtSecret);
    const { userId } = payload;
    if (!userId) {
      return res.status(403).json({
        msg: "Invalid token 1",
      });
    }
    const user = await User.findById(userId);
    if (!user) {
      return res.status(403).json({
        msg: "Invalid token 2",
      });
    }
    if(!user.isVerified){
        return res.status(409).json({
            msg: "Verify your user to continue",
          });
    }
    user.password = undefined;
    req.user = user;
    next();
  } catch (error) {
    return res.status(403).json({
        msg: "Invalid token error",
      });
  }
};
export {authValidator}