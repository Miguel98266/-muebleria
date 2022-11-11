import joi from "joi";

const now = Date.now();
const adultAge = new Date(now - 1000 * 60 * 60 * 24 * 365 * 18);

const createUserValidator = async (req, res, next) => {
  const userSchema = joi.object({
    name: joi.string().required().empty("").min(3).max(50), //✅
    lastName: joi.string().required().empty("").min(3).max(50), //✅
    birth: joi.date().required().less(adultAge).greater("1-1-1934"), //✅
    dni: joi.string().required().empty(""),//✅
    phoneNumber: joi.string().min(8).max(10),//✅
    email: joi.string().required().email().empty("").trim(),//✅
    address: joi.object({
      country: joi.string().required(), //✅
      city: joi.string().required(), //✅
      zipcode: joi.string().required().length(5), //✅
      street: joi.string().required(), //✅
    }).required(), 
    reference: joi.array().min(1).items({
      name: joi.string().required(), //✅
      phoneNumber: joi.string().required(), //✅
      dni: joi.string().required(), //✅
    }).required(),
    password: joi.string().empty().min(4).max(30).trim().required(),//✅
    role:joi.string().required().valid('Admin', 'Client'),
  });
  try {
    await userSchema.validateAsync(req.body)
    next();
  } catch (error) {
    return res.status(400).json({
        msg: "Incorrect data",
        error,
      });
  }
};

export {createUserValidator}
