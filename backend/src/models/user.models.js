import mongoose from "mongoose"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, "name is required"],
        minlength:[2, "mimum length should be 2"]
    },
    email: {
        type: String,
        required: [true, "email is required and should be unique"],
        unique: true,
        index: 1,
        minlength:[10, "mimum length should be 10"]
    },
    password: {
        type: String,
        required: [true, "password is required and length should is minimum 7"],
        minlength: 7
    },
   

    role: {
        type: String,
        enum: ["admin", "user"],
        default: "user",
    },
  

    refreshToken: {
        type: String
    }



}, { timestamps: true })


userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next()

    let salt = await bcrypt.genSalt(12)
    let hashPassword = await bcrypt.hash(this.password, salt)
    this.password = hashPassword
})

userSchema.methods.isPasswordCorrect = async function (enterPassword) {

    return await bcrypt.compare(enterPassword, this.password)
}

userSchema.methods.generateAccessToken = function () {
    return jwt.sign({
        _id: this._id
    },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

userSchema.methods.generateRefreshToken = function () {
    return jwt.sign({
        _id: this._id
    },
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: process.env.REFRESH_TOKEN_EXPIRY }
    )
}


export const User = mongoose.model("User", userSchema)

