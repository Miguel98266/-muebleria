import PropertyService from "../services/property.js";
const propertyService = new PropertyService();

const create = async (req, res) => {
  const { id } = req.user;
  req.body.user = id;
  let photos = req.files.map((file) => file.path);
  req.body.photos = photos;
  try {
    const property = await propertyService.create(req.body);
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
  console.log(query.minPrice)
  let filter={}
  if(query.maxPrice && query.minPrice){
    delete query["price"]; 
    filter.price={
      $gte:query.minPrice,
      $lte:query.maxPrice 
    }
    delete query["maxPrice"]; 
    delete query["minPrice"]; 
  }else if (query.maxPrice || query.minPrice) {
    delete query["price"]; 
    if(query.maxPrice){
      filter.price={
        $lte:query.maxPrice
      }
      delete query["maxPrice"]; 
    }
    if(query.minPrice){
      filter.price={
        $gte:query.minPrice
      }
      delete query["minPrice"]; 
    }
  }

  if(query.maxRooms && query.minRooms){
    delete query["rooms"]; 
    filter.rooms={
      $gte:query.minRooms,
      $lte:query.maxRooms 
    }
    delete query["minRooms"]; 
    delete query["maxRooms"]; 
  }else if (query.maxRooms || query.minRooms) {
    delete query["rooms"]; 
    if(query.maxRooms){
      filter.rooms={
        $lte:query.maxRooms 
      }
      delete query["maxRooms"]; 
    }
    if(query.minRooms){
      filter.rooms={
        $gte:query.minRooms
      }
      delete query["minRooms"]; 
    }
  }
  
  console.log("Antes",filter)
  console.log("Antes",query)
  let filterAux={
    ...filter,
    ...query
  }
  console.log(filterAux)
  
  try {
    const filter = await propertyService.find(filterAux, {
      street: 1,
      city: 1,
      country: 1,
      zipcode: 1,
      borough: 1,
      offerType: 1,
      offerProperty:1,
      price:1,
      rooms:1,
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


const readByid = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const property = await propertyService.findid(id);
    console.log(property);
    if (!property) {
      return res.status(500).json({
        msj: "Property not found",
        error,
      });
    }
    const update = await propertyService.update(
      id,
      { counter: property.counter + 1 },
      "user"
    );
    console.log(update);
    return res.json(update);
  } catch (error) {
    return res.status(500).json({
      msj: "Failed to find property",
      error,
    });
  }
};

export { create, findFilter, readByid };
