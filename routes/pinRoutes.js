const Pinrouter = require('express').Router();
const Pin = require("../models/PinModel")


Pinrouter.post('/',async (req,res)=>{
    const {username,title,desc,rating,lat,long} = req.body;
    if(!username || !title || !desc  || !rating || !lat || !long){
       return res.status(400).json({error:"All the fields are required"})
        
    }
    try{
        const createdPin = await Pin.create({username,title,desc,rating,lat,long})
        res.status(201).json({ message: "Your pin is created", createdPin });
    }catch(e){
        res.status(500).json(e)
    }
})

Pinrouter.get("/",async (req,res)=>{
    try{
        const getAllPins = await Pin.find()
        console.log(getAllPins)
        res.status(201).json({ message: "Your pinned locations are", getAllPins });
    }catch(e){
        res.status(500).json(e)
    }
})

module.exports = Pinrouter