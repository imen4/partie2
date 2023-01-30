const express = require('express')
const router = express.Router();
const Command = require('../model/Command');



//add command
//method post

router.post("/new",async (req , res) =>{
    try {
        //create a new command
        const newCommand = new Command(req.body)
        //save command
        const response = await newCommand.save();
        res.status(200).send({response:response , message:"command is saved"})
    } catch (error) {
        res.status(500).send({message:"can not save it"})
        console.log(error)
    }
})

//get Products
//method get

router.get("/",async(req,res)=>{
    try {
        const result = await Command.find()
        res.status(200).send({response:result , message:"geting command seccessfully"})
    } catch (error) {
        res.send({message:"can not get command"})
    }
})




module.exports =router