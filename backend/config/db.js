import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://shubhamnishad275:E8EbnwZb3T6mlGlV@cluster0.9qy1ydf.mongodb.net/food-del')
        .then(() => {
        console.log("db connected")
        })
}


// mongodb+srv://shubhamnishad275:<password>@cluster0.9qy1ydf.mongodb.net/?
// E8EbnwZb3T6mlGlV