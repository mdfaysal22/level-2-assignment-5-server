import mongoose from "mongoose";
import config from "../config";

const connectDB = async() => {
   if(!config.database_url){
    console.log("No database url provided");
   }else {
    try{   
        await mongoose.connect(config.database_url)
        console.log('Database Connected');

    }catch{
        console.log("Error connecting to database");
    }
   }
};


export default connectDB;