const mongoose = require('mongoose')

async function connectDB(){
    try {

        await mongoose.connect(process.env.MONGO_URI)
        
      console.log(`Connected to Mongodb: ${mongoose.connection.name}`)
    } catch (error) {
        console.log("Mongodb connection failed",error.message)
        process.exit(1)    
    }

}

module.exports = {connectDB}