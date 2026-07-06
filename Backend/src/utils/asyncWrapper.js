const ApiResponse = require("./apiRes");

const asyncWrapper = (fn)=>{
    return async (req,res,next)=>{
        try {
            await fn(req, res, next)
        } catch (error) {
            console.log(error)

            if(res.headersSent) return;
            
            next(error)
        }
    }
}

module.exports = {
    asyncWrapper
}