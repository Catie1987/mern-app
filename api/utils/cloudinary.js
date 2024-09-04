const cloudinary = require('cloudinary').v2;

cloudinary.config({ 
    cloud_name: process.env.VITE_CLOUDINARY_NAME, 
    api_key: process.env.CLOUD_KEY, 
    api_secret: process.env.CLOUD_KEY_SECRET 
  });

  module.exports= cloudinary;