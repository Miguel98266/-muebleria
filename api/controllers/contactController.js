import Contact from "../models/Contact.js";
import ContactService from "../services/contact.js";
const contactService = new ContactService();

const create = async (req, res) => {
  const { id } = req.params;
  req.body.property = id;
  try {
    const create = await contactService.create(req.body);
    return res.status(201).json({
      msg: "Request sended successfully",
      create,
    });
  } catch (error) {
    return res.status(500).json({
      msj: "Failed to send contact, please try again later",
      error,
    });
  }
};

const readContactbyProperty = async (req, res) => {
  const { id: idUser } = req.user;
  const { id: idProperty } = req.params;
  try {
    const prope = await contactService.find(
      { property: idProperty },
      null,
      "property"
    );
    const messages = prope.map((x) => {
      const obj = {};
      obj.name = x.name;
      obj.email = x.email;
      obj.message = x.message;
      obj.phoneNumber = x.phoneNumber;
      return obj;
    });
    if (!prope) {
      return res.status(403).json({
        msg: "Invalid property",
      });
    }
    const userProperty = prope[0].property.user.toString();
    console.log(userProperty);
    if (idUser !== userProperty) {
      return res.status(403).json({
        msg: "Forbidden you don't have permission to access",
      });
    }

    return res.json({
      messages,
    });
  } catch (error) {
    return res.status(403).json({
      msg: "Invalid token error",
    });
  }
};

export { create, readContactbyProperty };
