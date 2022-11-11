import dotenv from "dotenv";
dotenv.config();

export default {
  server: {
    port: process.env.PORT || 3000,
    url: process.env.URL || `http://localhost:${process.env.PORT || 3000}`,
  },
  mailer: {
    email: process.env.MAILER_EMAIL,
    password: process.env.MAILER_PASSWORD,
  },
  database: {
    uri: process.env.DB_URI || "mongodb://localhost/test",
  },
  jwtSecret: process.env.JWT_SECRET,
  cloudinary:{
    cloudName:process.env.CLOUD_NAME,
    cloudApi:process.env.CLOUD_API_KEY,
    cloudSecret:process.env.CLOUD_API_SECRET
  }
};
