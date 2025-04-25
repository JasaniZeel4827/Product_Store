import express from 'express';
import dotenv from "dotenv";
import { connectDB } from './config/db.js';
import Product from './models/product.model.js';
// import mongoose from 'mongoose';
// import * as mongoose from 'mongoose';

dotenv.config();

const app = express();


app.get("/products", async (req,res) => {
    // res.send("server is ready in 1.. 2.. 3.. let's gooo")
    const product = req.body;

    if(!product.name || !product.price || !product.image){
        return res.status(400).json({success:false, message: "Please provide all filels "})
    } 

    const newProduct = new Product(product)

    try{
        await newProduct.save();
        res.status(201).json({success: true, data: newProduct})
    }catch (error) {
        console.log("error in create product:", error.message);
        
    }
});


// console.log(process.env.MONGO_URI)



app.listen(5000, () => {
    connectDB();
    console.log("zeel nu server start at http://localhost:5000 ")
})




// jVj3VTJpiUtwEWMd