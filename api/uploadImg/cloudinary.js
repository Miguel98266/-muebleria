import multer from 'multer';
import cloudinary from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import config from "../config/index.js";
const cloud = cloudinary.v2;

/**
 * 1.- Crear const de configuración de cloudinary con nuestras credenciales
 */
cloud.config({
  cloud_name: config.cloudinary.cloudName,
  api_key: config.cloudinary.cloudApi,
  api_secret: config.cloudinary.cloudSecret,
});

export default cloud;