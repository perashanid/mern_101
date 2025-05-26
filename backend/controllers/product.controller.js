import Product from '../models/product.js'
import mongoose from 'mongoose'

export const getProducts=async (req,res)=>{
    try {
        const products = await Product.find({});
        res.status(200).json({success: true,message : "products  fetched", data: products});

    }
    catch(error){
        res.status(500).json({success: false, message: "internal sever error"})
    }
    
};

export const deleteProduct = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "product invalid" });
    }

    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "product deleted" });
    } catch (error) {
        res.status(404).json({ success: false, message: "product not found" });
    }
};
 export const createProduct=async (req,res)=>{
    const product=req.body;

    if (!product.name || !product.price || !product.image){
        return res.status(400).json({success: false, message: "please provide all fields"});
        
    } 
    const newproduct = new Product(product);
    try{
        await newproduct.save();
        res.status(201).json({success: true, message: "product created",data:newproduct});
    }
    catch(error){
        console.error("error in create product : ",error.message);
        res.status(500).json({success: false, message: "internal server error"});

    }
};
  
 export const updateProduct= async (req,res)=>{
    const {id} = req.params;
    const product = req.body;
    try{
        const updatedProduct = await Product.findByIdAndUpdate(id,produuct,{new:true});
        res.status(200).json({success:true,message:"product updated",data:updatedProduct});
    }
    catch(error){
        res.status(404).json({success : false, message:"product not found"});
        

    }
};