const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");
const cloudinary = require('./cloudinaryConfig')

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
     params: {
       folder: "TRAVELHOLIC",
     },
  limits: {
    files: 1 // Limit to 1 files per upload
  }
});

const upload = multer({ storage: storage });
module.exports = upload