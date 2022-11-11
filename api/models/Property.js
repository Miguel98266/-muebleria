import mongoose from "mongoose";

const propertySchema=new mongoose.Schema({
    street:{
        type: String,
        required: true,
      },
    noExterior:{
        type: String,
        required: true,
      },
    noInterior:{
        type: String,
      },
    zipcode:{
        type: String,
        required: true,
      },
    city:{
        type: String,
        required: true,
      },
    country:{
        type: String,
        required: true,
      },
    borough:{
        type: String,
      },
    offerType:{
        type: String,
        enum: ['rent', 'to buy'],
        required: true,
      },
      offerProperty:{
        type: String,
        enum: ['house', 'office', 'apartament','warehouse'],
        required: true,
      },
    price:Number,
    description:String,
    rooms:Number,
    photos:[String],
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    counter:{ type: Number, default: 0 }
})

export default mongoose.model("Property",propertySchema)