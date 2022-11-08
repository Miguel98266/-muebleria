import Property from "../models/Property.js";

const create = async (req, res) => {
  const { id } = req.user;
  req.body.user = id;
  
  try {
    const property = await Property.create(req.body);
    return res.status(201).json({
      msg: "Property added successfully",
      property,
    });
  } catch (error) {
    return res.status(500).json({
      msj: "Failed to create a new property, please try again later",
      error,
    });
  }
};
const findFilter = async (req, res) => {
  const { query } = req;
  try {
    const filter = await Property.find(query, {
      street: 1,
      city: 1,
      country: 1,
      zipcode: 1,
      borough: 1,
      offerType: 1,
      photos: { $slice: 1 },
    });
    return res.json(filter);
  } catch (error) {
    return res.status(500).json({
      msj: "Failed to find properties",
      error,
    });
  }
};

// ! Verificar logica
const readByid = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const property = await Property.findById(id);
    if (!property) {
      return res.status(500).json({
        msj: "Property not found",
        error,
      });
    }
    const update = await Property.findByIdAndUpdate(
      id,
      { counter: property.counter + 1 },
      { new: true }
    ).populate("user");
    return res.json(update);
  } catch (error) {
    return res.status(500).json({
      msj: "Failed to find property",
      error,
    });
  }
};

export { create, findFilter, readByid };
