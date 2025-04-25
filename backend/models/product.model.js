import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    type: String,
    required: true
});