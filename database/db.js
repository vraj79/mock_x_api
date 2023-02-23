const mongoose = require("mongoose");

mongoose.set('strictQuery', true)

const connectDB=async()=>{
    await mongoose.connect("mongodb+srv://Vraj:Vishal123@cluster0.n6fk1.mongodb.net/mock-x?retryWrites=true&w=majority",()=>{
        console.log("Connected to DB");
    })
}

module.exports = connectDB