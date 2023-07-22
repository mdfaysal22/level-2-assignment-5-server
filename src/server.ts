import app from "./app"
import config from "./config"
import connectDB from "./utils/database"

const server = async() => {
    if(!config.port){
        console.log("Please provide a port number in the environment variable PORT")
    }else{
        try{
            await connectDB()
            app.listen(config.port, () => {
                console.log(`Server is running on port ${config.port}`)
            })
        }catch(error){
            throw new Error("Unable to start the Server")
        }
    }
};

server();