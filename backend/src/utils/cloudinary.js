
import { v2 as cloudinary } from "cloudinary"
import fs from "fs"
import { ApiError } from "./ApiError.js";


// Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET_KEY
});

const uploadImageOnCloudinary = async (localFilePath) => {

  if (!localFilePath) return null

  if (!fs.existsSync(localFilePath)) {
    throw new ApiError(400, "File not found at specified path");
  }
    

  try {
    const response = await cloudinary.uploader.upload(localFilePath,
      {
        folder: "empireBlue",
        resource_type: "auto"

      })

    

    if (!response) throw new ApiError(500, "Upload failed, please try again")

  
    console.log('File uploaded successfully to Cloudinary');

    try {
      fs.unlinkSync(localFilePath);
    } catch (unlinkErr) {
      console.warn("Error deleting local file:", unlinkErr.message);
    }

    return response


  } catch (error) {

    try {
      fs.unlinkSync(localFilePath);
    } catch (unlinkErr) {
      console.warn("Error deleting local file after failure:", unlinkErr.message);
    }

    return null

  }
}

const deleteImageFromCloudinary = async (publicId) => {
  if (!publicId) {
    throw new ApiError(400, "Public ID is required to delete an image.");
  }

  try {
    const response = await cloudinary.uploader.destroy(publicId);

    if (response.result === "ok") {
      console.log("Image deleted successfully from Cloudinary");
      return true;
    } else {
      throw new ApiError(500, "Failed to delete image from Cloudinary.");
    }
  } catch (error) {
    console.error("Error deleting image from Cloudinary:", error.message);
    throw new ApiError(500, "An error occurred while deleting the image.");
  }
};


export { uploadImageOnCloudinary, deleteImageFromCloudinary }