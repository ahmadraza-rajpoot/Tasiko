const express = require("express")

const userRouter = express.Router()

//create user profile
userRouter.post('/', async (req,res)=>{
    const {firstName, lastName, email, avatar} = req.body;
    //continue....
})

//get user profile
userRouter.get('/')


module.exports = userRouter;