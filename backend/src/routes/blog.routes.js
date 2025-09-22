

import { Router } from 'express'
import authenticate from "../middleware/authenticate.middleware.js"
import upload from "../middleware/multer.middleware.js"

import {
    publishBlog,
    deleteBlog,
    getBlog,
    getSingleBlog,
    updateBlogImage,
    updateBlogDetails
} from "../controllers/blog.controller.js"



const router = Router();

router.post("/publish-blog", authenticate, upload.single("image"), publishBlog);
router.get("/get-blog", authenticate, getBlog);
router.delete("/delete/:id", authenticate, deleteBlog);
router.patch("/update-image/:id", authenticate, upload.single("newImage"), updateBlogImage);
router.patch("/update-blog-details/:id", authenticate, updateBlogDetails);
router.get("/get-single-blog/:id", authenticate, getSingleBlog);



export default router


