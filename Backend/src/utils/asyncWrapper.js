const asyncWrapper = (fn)=>{
    return async (req,res,next)=>{
        try {
            await fn(req, res, next)
        } catch (error) {
            console.log(error)

            if(res.headersSent) return;
            
            res.status(500).json({
                success:false,
                message:"Something went wrong."
            })
        }
    }
}

module.exports = {
    asyncWrapper
}