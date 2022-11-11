import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloud from "./cloudinary.js";
import multer from 'multer';
/**
 * 2.- Configurar un storage temporal antes de subirlo a cloudinary con la config de antes
 */

const storage = new CloudinaryStorage({
  cloudinary: cloud,
  params: {
    folder: "DEV",
  },
});
const uplaodMiddleware = multer({ storage: storage });
export default uplaodMiddleware;
