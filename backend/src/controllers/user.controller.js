import { User } from "../models/user.models.js"
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from '../utils/ApiResponse.js';
import asyncHandler from "../utils/asyncHandler.js"


const generateAccessTokenAndRefreshToken = async (userId) => {

 
  let user = await User.findById(userId)
  if (!user) {
    throw new ApiError(404, "user not found")
  }
  
  try {
    let accessToken = user.generateAccessToken()
  
    
    let refreshToken =  user.generateRefreshToken()

    user.refreshToken = refreshToken
    await user.save({ validateBeforeSave: false })

    return { accessToken, refreshToken }
  } catch (error) {
    throw new ApiError(500, 'error while generating acces or refresh tokens')
  }
}

const register = asyncHandler(async (req, res) => {

  const {name, password, email } = req.body

  let existingUser = await User.findOne({email})

  if (existingUser) {
    throw new ApiError(400, "user already exists")
  }

  let user = await User.create({
    name,
    email,
    password,
   
  })

  if (!user) {
    throw new ApiError(false, 500, "user not created")
  }

  let createdUser = await User.findOne({ email }).select("-password -refreshToken")


  return res.status(201).json(
    new ApiResponse(201, { createdUser }, "user register successfully")
  )
})

const login = asyncHandler( async(req, res) => {

  const { email, password } = req.body

  const user = await User.findOne({ email })

  if (!user) {
    throw new ApiError(404, "user not found with this email id")
  }

  let isPassMatch = await user.isPasswordCorrect(password)
  if (!isPassMatch) {
    throw new ApiError(400, "Wrong Credentials!!")
  }

  const isProd = process.env.NODE_ENV === 'production'
  const options = {
  httpOnly: true,
  secure: isProd,
  sameSite: isProd ? 'none' : 'lax',
  path: '/',
  maxAge: 60 * 60 * 1000 
  }

  let { accessToken, refreshToken } = await generateAccessTokenAndRefreshToken(user._id)

  if (!accessToken || !refreshToken) {
  throw new ApiError(500, "Token generation failed");
}

  const loggedInUser = await User.findById(user._id).select( "-password -refreshToken") 



  return res.status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
      new ApiResponse(200, { loggedInUser }, "user logged in successfully")
    )

})

const logout = asyncHandler(async (req, res) => {

  const { id } = req.myUser

  const user = await User.findByIdAndUpdate(
    id,
    {
      $set: {
        refreshToken: undefined,
        new: true
      }
    }
  )


  const isProd = process.env.NODE_ENV === 'production'
  const clearOpts = { httpOnly: true, secure: isProd, sameSite: isProd ? 'none' : 'lax', path: '/' }

  return res
    .status(200)
    .clearCookie("accessToken", clearOpts)
    .clearCookie("refreshToken", clearOpts)
    .json(new ApiResponse(200, { user }, "User logged out successfully"));
});



const getCurrentUser = asyncHandler(async (req, res) => {
    res.status(200).json(
        new ApiResponse(200, req.myUser, "User fetched successfully")
    )
})


export { register, login, logout , getCurrentUser}