const mongoose = require('mongoose')

async function connectDB(){
    try {

      const result =  await mongoose.connect(process.env.MONGO_URI)
        
      console.log(`DB ${result.connection.name} has been connected`)
    } catch (error) {
        console.log(error.message)    
    }

}

module.exports = {connectDB}