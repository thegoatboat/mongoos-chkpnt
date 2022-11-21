const mongoose =require('mongoose')



const connectddb=()=>{
    try{
         mongoose.connect  (process.env.MONGO_URI)
         console.log('you are connected to the DB')
    }
    catch(err){
        console.log(err)
    }

}

module.exports = connectddb;