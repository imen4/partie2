const express = require('express')
const router = express.Router();
const Produit = require('../model/Produit');


//get Products
//method get
//path :http://localhost:7001/api/product/
router.get("/",async(req,res)=>{
    try {
        const result = await Produit.find()
        res.status(200).send({response:result , message:"geting products seccessfully"})
    } catch (error) {
        res.send({message:"can not get products"})
    }
})
//get One Product
//method get
//path :http://localhost:7001/api/product/:id
router.get("/:id",async(req,res)=>{
    try {
        const result = await Produit.findOne({_id:req.params.id})
        if(result){
            res.status(200).send({response:result , message:"geting product by ID seccessfully"})
        }else{
            res.status(400).send({message:"there is no product with this id"})
        }
    } catch (error) {
        res.send({message:"can not get product"})
    }
})


module.exports =router