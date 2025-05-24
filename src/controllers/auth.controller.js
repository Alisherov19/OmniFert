const {User} = require("../models")
const bcrypt = require("bcrypt")
const { asyncHandler } = require("../utils")
const generateToken = require("../utils/generateToken")

const register = asyncHandler(async (req,res,next) =>{
    const {username,email,password} = req.body
     console.log("RECEIVED USERNAME:", username);
     console.log("REQ.BODY:", req.body);
    const existingUser = await User.findOne({where :{email}})
    if(existingUser){
        const error = new Error("email has already existed")
        error.statusCode = 400
        return next(error)
    }
    const role = email ==="Alirizo@gmail.com" && password === "Alisherov2011" ? "admin" : "user"
    const user = await User.create({ username ,email,password,role})
    res.status(201).json({
        success:true,
        message:"User registered successfully",
        username: user.username,
        email:user.email,
        password: user.password,
        role:user.role
    })
})

const login = asyncHandler(async(req,res,next)=>{
    const {email,password} = req.body
    const user = await User.findOne({where :{email}})
    if(!user){
        const error = new Error("invalid email or password")
        error.statusCode = 401
        return next(error)
    }
    const matchPassword = await bcrypt.compare(password,user.password)
    if(!matchPassword){
        const error = new Error("invalid email or password")
        error.statusCode = 401
        return next(error)
    }
     const token = generateToken(user)
   res.json({
    message: 'Login',
    token,
    user: {
      id: user.id,
      email: user.email,
      role: user.role,
    },
  });
})


const logout = asyncHandler(async (req,res,next)=>{
   res.clearCookie("auth_token")
   res.status(200).json({success:true,message:"user logout successfully"})
} )

module.exports = {
    register,
    login,
    logout
};
