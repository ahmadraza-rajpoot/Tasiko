const ApiError = require("./apiError");
const ApiResponse = require("./apiRes");

const globalError = (error, req, res, next)=>{

    if( !(error instanceof ApiError)){
      return  res.status(500).json(new ApiResponse(500,error.message??"Something went wrong"))
    }

    return res.status(error.statusCode).json(new ApiResponse(error.statusCode, error.message))
}

module.exports = {globalError}