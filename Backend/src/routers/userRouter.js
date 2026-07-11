const express = require("express")
const ApiResponse = require('../utils/apiRes')
const userRouter = express.Router()
const User = require('../models/user')
const {asyncWrapper} = require('../utils/asyncWrapper')

//create user profile
userRouter.post('/',  asyncWrapper( async (req,res)=>{
    
    const {firstName,lastName,email,password} = req.body;
  
    const data = await User.create({firstName,lastName,email,password})

    res.status(201).json(new ApiResponse(201,"User has been created",{firstName,lastName,email}))
}))

//get user profile
//userRouter.get('/')


module.exports = userRouter;