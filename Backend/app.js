const express = require('express')
const {asyncWrapper} = require('./src/utils/asyncWrapper')
const app = express()

app.get("/", asyncWrapper((req, res)=>{
    
    return res.status(200).json({
        success:true,
        message:"Working, started new project"
    })
}))

app.listen(3000)