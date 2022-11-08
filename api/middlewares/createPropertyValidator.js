import joi from "joi";

const createPropertyValidator=async(req,res,next)=>{
    const propertySchema=joi.object({
        street:joi.string().required().max(150),
        noExterior:joi.string().required().max(5),
        noInterior:joi.string().required().max(5),
        zipcode:joi.string().required().length(5),
        city:joi.string().required().max(30),
        country:joi.string().required().max(30),
        borough:joi.string().required().max(30),
        offerType:joi.string().valid('house', 'office', 'apartament','warehouse'),
        price:joi.number().greater(0),
        description:joi.string().required().max(250),
        rooms:joi.string().required().max(3),
        photos:joi.array().min(1).items(joi.string),
        user:joi.string.required()
    })
    
    try {
        await propertySchema.validateAsync(req.body)
        next();
    } catch (error) {
        return res.status(400).json({
            msg: "Incorrect data",
            error,
          });
    }
}