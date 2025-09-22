

import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import {error} from "./src/middleware/error.middleware.js"


const app = express()

app.use(cors({
  origin: process.env.ORIGIN,
  credentials: true, 
}));




app.use(express.json({ limit: "16kb"}))
app.use(express.urlencoded({extended:true, limit:"16kb"}))
app.use(express.static('public'))
app.use(cookieParser())



 import  userRoutes  from "./src/routes/user.routes.js"
 import blogRoutes from "./src/routes/blog.routes.js"

app.use("/api/users", userRoutes)
app.use("/api/blogs", blogRoutes)




app.use(error)
export {app}