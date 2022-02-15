const mongoose = require('mongoose');

const connectDB= async()=>{
    //mongodb connection string
    try{
    const con = await mongoose.connect(process.env.MONGO_URI);
    console.log(`mongoDB connected: ${con.connection.host}`);
    }
    catch(err){
        console.log(err);
        process.exit(1);
    }

    }
module.exports=connectDB;