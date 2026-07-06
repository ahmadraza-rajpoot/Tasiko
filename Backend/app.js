const express = require('express')
const {asyncWrapper} = require('./src/utils/asyncWrapper')
const ApiResponse = require("./src/utils/apiRes")
const ApiError = require('./src/utils/apiError')
const { globalError } = require('./src/utils/globalError')
const app = express()



app.get("/", asyncWrapper((req, res)=>{
    throw new ApiError(500, "This is not working...")
    return res.status(200).json(new ApiResponse(200,"working",{name:"ahmad"}))
}))


app.use(globalError)

app.listen(3000)