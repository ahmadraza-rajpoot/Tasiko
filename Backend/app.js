const express = require('express')

const app = express()

app.get("/",(req, res)=>{
    res.status(200).json({
        success:true,
        message:"Working, started new project"
    })
})

app.listen(3000)