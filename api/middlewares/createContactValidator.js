import joi from "joi";

const createContactValidator = async (req, res, next) => {
  const contactSchema = joi.object({
    name: joi.string().required().empty("").min(3).max(50),
    email: joi.string().required().email().empty("").trim(),
    phoneNumber: joi.string().min(8).max(10),
    message: joi.string()
  });
  try {
    await contactSchema.validateAsync(req.body);
    next();
  } catch (error) {
    return res.status(400).json({
      msg: "Incorrect data",
      error,
    });
  }
};

export default createContactValidator;
