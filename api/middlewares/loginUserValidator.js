import joi from "joi";

const loginUserValidator = async (req, res, next) => {
  const loginSchema = joi.object({
    email: joi.string().required().email().empty().trim(),
    password: joi.string().empty().min(4).max(30).trim().required(),
  });
  try {
    await loginSchema.validateAsync(req.body);
    next();
  } catch (error) {
    return res.status(400).json({
      msg: "Incorrect data",
      error,
    });
  }
};
export default loginUserValidator;
