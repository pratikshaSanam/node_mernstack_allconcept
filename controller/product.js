
 const fs = require('fs');
 const  model = require('../model/product')
 const mongoose = require('mongoose');
 
 
// // const index = fs.readFileSync('index.html','UTF-8');
// const data = JSON.parse(fs.readFileSync('data.json','UTF-8'));
 const Product = model.Product;



exports.getonProduct =async (req,res)=>{
    const products = await Product.find({price:{$gt:90}});
       res.json(products);
}
    

exports.getProduct = async (req,res)=>{
    
    const id = req.params.id;
    const products =  await Product.findById(id);
    res.json(products)
 }

 exports.addProduct = async (req, res) => {
    try {
        const product = new Product(req.body); // Create a new product instance
        const savedProduct = await product.save(); // Save product to DB
        res.status(201).json(savedProduct); // Send response with saved product
    } catch (err) {
        res.status(400).json({ error: err.message }); // Handle errors
    }
};


 




 exports.delProduct = async(req,res)=>{
    
    const id = req.params.id;
    try{
    const doc = await Product.findOneAndDelete({_id:id})
    res.status(201).json(doc);
}
catch(err){
    console.log(err)
    res.status(400).json(err);
}


}

exports.replaceProduct = async (req,res)=>{
    
    const id = req.params.id;
    try{
    const doc = await Product.findOneAndReplace({_id:id},req.body,{new:true})
    res.status(201).json(doc);
}
catch(err){
    console.log(err)
    res.status(400).json(err);
}
}

exports.updateproduct = async (req,res)=>{
    
    const id = req.params.id;
    try{
    const doc = await Product.findOneAndUpdate({_id:id},req.body,{new:true})
    res.status(201).json(doc);
}
catch(err){
    console.log(err)
    res.status(400).json(err);
}
}


