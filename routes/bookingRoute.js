const express = require("express");
const BookingModel = require("../models/booking/bookingModel");

const BookingRouter = express.Router();

BookingRouter.post("/booking",async(req,res)=>{
    try {
        console.log(req.body)
        let booking=new BookingModel(req.body);
        await booking.save();
        res.send("Booking Successfull")
    } catch (error) {
        res.status(501).send({error})
    }
})

BookingRouter.get('/dashboard',async(req,res)=>{
    try {
        let users=await BookingModel.find().populate("user");
        let flights=await BookingModel.find().populate("flight");
        res.status(200).send({users,flights})
    } catch (error) {
        res.status(501).send({error})
    }
})

module.exports = BookingRouter