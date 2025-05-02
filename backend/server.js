import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import Product from "./models/product.model.js";
import mongoose from "mongoose";
// import mongoose from 'mongoose';
// import * as mongoose from 'mongoose';

dotenv.config();

const app = express();

app.use(express.json());

app.get("/product", async (req, res) => {
  try {
    const product = await Product.find({});
    res.status(200).json({ success: true, data: product });
  } catch (error) {
    console.log("error in deleting product:", error.message);
    res.status(404).json({ success: true, message: "product deleted" });
  }
});



// app.put("/api/products/:id", async (req, res) => {
//   const { id } = req.params;

//   const product = req.body;

//   if(mongoose.Types.ObjectId.isValid(id)){
//     return res.status(404).json({ success:false, data: "Server error" });
//   } catch (error){

//   }

//   try {
//     await Product.findByIdAndUpdate(id, product,{new:true});
//     res.status(200).json({ success: true, data: updatedProduct});
//   } catch (error) {
//     res.status(500).json({ success: false, message: "server error" });
//   }
// });





app.put("/api/products/:id", async (req, res) => {
  const { id } = req.params;

  const product = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ success: false, message: "Invalid Product Id" });
  }

  try {
      const updatedProduct = await Product.findByIdAndUpdate(id, product, { new: true });
      res.status(200).json({ success: true, data: updatedProduct });
  } catch (error) {
      res.status(500).json({ success: false, message: "Server Error" });
  }
});











// app.get("/products", async (req,res) => {
//     // res.send("server is ready in 1.. 2.. 3.. let's gooo")
//     const product = req.body;

//     if(!product.name || !product.price || !product.image){
//         return res.status(400).json({success:false, message: "Please provide all filels" })
//     }

//     const newProduct = new Product(product)

//     try{
//         await newProduct.save();
//         res.status(201).json({ success: true, data: newProduct})
//     }catch (error) {
//         console.log("error in create product:", error.message);
//         res.status(500).json({ success: false, message: "server error"})

//     }
// });

app.post("/products", async (req, res) => {
  const product = req.body;

  if (!product.name || !product.price || !product.image) {
    return res
      .status(400)
      .json({ success: false, message: "Missing product details" });
  }

  const newProduct = new Product(product);

  try {
    await newProduct.save();
    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    console.log("Error in creating product:", error.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

app.delete("/products/:id", async (req, res) => {
  const { id } = req.params;
  // console.log("id:", id);

  try {
    const updatedProduct = await Product.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "Product deleted" });
  } catch (error) {
    res.status();
  }
});

// console.log(process.env.MONGO_URI)

app.listen(5000, () => {
  connectDB();
  console.log("zeel nu server start at http://localhost:5000 ");
});

// jVj3VTJpiUtwEWMd
