const express = require('express')
const {asyncWrapper} = require('./src/utils/asyncWrapper')
const ApiResponse = require("./src/utils/apiRes")
const app = express()

app.get("/", asyncWrapper((req, res)=>{
    
    return res.status(200).json(new ApiResponse(200,"working",{name:"ahmad"}))
}))

app.listen(3000)