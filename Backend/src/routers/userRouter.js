const express = require("express")
const ApiResponse = require('../utils/apiRes')
const userRouter = express.Router()
const User = require('../models/user')

//create user profile
userRouter.post('/', async (req,res)=>{
   
    const firstName = req.body?.firstName?.trim()
    const lastName = req.body?.lastName?.trim()
    const email = req.body?.email?.trim().toLowerCase();
    const password = req.body?.password;

    const data = await User.create({firstName,lastName,email,password})
    console.log(data)
    res.status(201).json(new ApiResponse(201,"User has been created",{firstName,lastName,email}))
})

//get user profile
//userRouter.get('/')


module.exports = userRouter;