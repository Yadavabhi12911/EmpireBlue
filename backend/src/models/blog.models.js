
import mongoose from "mongoose";


const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: [2, "title length should be greater then 2"]
    },
    description: {
        type: String,
        required: true,
        minlength: [7, "title length should be greater then 10"]
    },
    image: {
        type: String,
        required: true
    }
}, { timestamps: true })


export const Blog = mongoose.model("Blog", blogSchema)