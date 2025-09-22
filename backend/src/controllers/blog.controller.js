import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from '../utils/ApiResponse.js';
import asyncHandler from "../utils/asyncHandler.js"
import { Blog } from "../models/blog.models.js";
import { uploadImageOnCloudinary, deleteImageFromCloudinary } from '../utils/cloudinary.js'
import getPublicId from '../utils/getImgPublicId.js'


const publishBlog = asyncHandler(async (req, res) => {

    const { title, description } = req.body


    let imageLocalPath = req.file.path
    

    if(!imageLocalPath) throw new ApiError(404, "no such image localPath found!")

    let uploadedResponse = await uploadImageOnCloudinary(imageLocalPath)

    let postBlog = await Blog.create({
        title,
        description,
        image: uploadedResponse.url
    })

    if (!postBlog) {
        throw new ApiError(false, 500, "blog not published")
    }

    return res.status(201).json(
        new ApiResponse(201, { postBlog }, "blog published successfully")
    )
})

const updateBlogDetails = asyncHandler(async (req, res) => {

    const { title, description } = req.body

    let updatetdBlog = await Blog.findByIdAndUpdate(
        req.params.id,
        {
            title,
            description
        },
        { new: true }
    )
    
    if (!updatetdBlog) {
        throw new ApiError(false, 404, "blog not found")
    }
    res.json({
        success: true,
        message: "blog data is updated successfully",
        data: updatetdBlog
    })
})

const updateBlogImage = asyncHandler(async (req, res) => {

    const localFilePath = req?.file?.path

    if (!localFilePath) throw new ApiError(false, 400,"image is required!")

    const { id } = req.params

    let cloudinaryImage = await Blog.findById(id)
  
    if (!cloudinaryImage.image) throw new ApiError(false, 404,"image not found")

    let public_id = getPublicId(cloudinaryImage.image)
   

    if (public_id !== undefined || public_id !== null) {
        let deleteImage = await deleteImageFromCloudinary(public_id)

        if (!deleteImage) throw new ApiError(false, 500,"unable to delete existing image , please try again")
    }

    let uploadNewImage = await uploadImageOnCloudinary(localFilePath)

    if (!uploadNewImage) throw new ApiError("error while updating new image", 500)

    let updatedImage = await Blog.findByIdAndUpdate(
        id,
        {
            image: uploadNewImage?.url,
        },
        { new: true }
    )
    
    await cloudinaryImage.save({ validateBeforeSave: false })

    res.status(200).json({
        success: true,
        message: "image updated successfully",
        data: updatedImage
    })

})

const deleteBlog = asyncHandler(async (req, res) => {
    const { id } = req.params

    const blog = await Blog.findById({ _id: id })
    if (!blog) {
        throw new ApiError("blog not found!!", 404)
    }

    let public_id = getPublicId(blog.image)

    let deleteImage = await deleteImageFromCloudinary(public_id)

    let deletedBlog = await Blog.findByIdAndDelete(id)

    res.json({
        success: true,
        message: "blog deleted successfully",
        data: deletedBlog
    })




})

const getBlog = asyncHandler(async (req, res) => {

    let blogs = await Blog.find()

    if (blogs.length === 0) throw new ApiError("no blogs found", 404)

    res.json({
        success: true,
        message: "blogs fetched successfully",
        data: blogs
    })
})


const getSingleBlog = asyncHandler(async (req, res) => {
    const { id } = req.params

    const blog = await Blog.findById(id)

    res.status(200).json({
        success: true,
        message: "blog fetched successfully",
        data: blog
    })
})

export {
    publishBlog,
    deleteBlog,
    getBlog,
    getSingleBlog,
    updateBlogImage,
    updateBlogDetails
}