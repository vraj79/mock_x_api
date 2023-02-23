const express = require("express");
const FlightModel = require("../models/flight/flightModel");

const FlightRouter=express.Router();

FlightRouter.post("/flights",async(req,res)=>{
    try {
        let flight=new FlightModel(req.body);
        await flight.save();
        res.status(201).send("Flight saved to DB")
    } catch (error) {
        res.send({error})
    }
})

FlightRouter.get("/flights",async(req,res)=>{
    try {
        let flights=await FlightModel.find();
        res.status(200).send(flights);
    } catch (error) {
        res.send({error})
    }
})

FlightRouter.get("/flights/:id",async(req,res)=>{
    const {id}=req.params
    try {
        let flight=await FlightModel.findById(id);
        if(flight){
            res.status(200).send(flight);
        }else{
            res.status(501).send("Flight Not Found");
        }
    } catch (error) {
        res.send({error})
    }
})

FlightRouter.delete("/flights/:id",async(req,res)=>{
    const {id}=req.params
    try {
        let flight=await FlightModel.findByIdAndDelete(id);
        res.status(200).send("Flight deleted Successfully");
    } catch (error) {
        res.send({error})
    }
})

FlightRouter.patch("/flights/:id",async(req,res)=>{
    const {id}=req.params
    try {
        let flight=await FlightModel.findByIdAndUpdate(id,req.body);
        res.status(200).send({status:"Flight updated Successfully"});
    } catch (error) {
        res.send({error})
    }
})


module.exports = FlightRouter;