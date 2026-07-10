const express = require('express')
require('dotenv').config()
const {asyncWrapper} = require('./src/utils/asyncWrapper')
const ApiResponse = require("./src/utils/apiRes")
const ApiError = require('./src/utils/apiError')
const { globalError } = require('./src/utils/globalError')
const {connectDB} = require('./src/db/connectDB')
const { configDotenv } = require('dotenv')
const userRouter = require('./src/routers/userRouter')
const app = express()

app.use(express.json())
app.use('/api/user', userRouter)

app.get("/", asyncWrapper((req, res)=>{
    throw new ApiError(500, "This is not working...")
    return res.status(200).json(new ApiResponse(200,"working",{name:"ahmad"}))
}))


app.use(globalError)
connectDB().then(()=>{
    app.listen(process.env.PORT, ()=>{
    console.log(`server is listening on PORT ${process.env.PORT}`)
})
}).catch((error)=>{
    console.log(error.message)
})
