import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect(process.env.MONGO_URI, {
        dbName: "foodDelivery"
    }).then(()=>{
       console.log('DB connected') ;
    })
}