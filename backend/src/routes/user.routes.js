


import { Router } from "express"
import { login, logout, register, getCurrentUser } from "../controllers/user.controller.js"
import authenticate from "../middleware/authenticate.middleware.js"


const router = Router()


router.post("/register", register)
router.post("/login", login)




router.post("/logout", authenticate, logout)
router.get("/me", authenticate, getCurrentUser)




export default router
