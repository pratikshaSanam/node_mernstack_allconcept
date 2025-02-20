
const fs = require('fs');
// const index = fs.readFileSync('index.html','UTF-8');
const data = JSON.parse(fs.readFileSync('data.json','UTF-8'));
const products = data.products;



exports.getonProduct = (req,res)=>{
       res.json(products);
}
    

exports.getProduct = (req,res)=>{
    
    const id = +req.params.id;
    const product = products.find(p =>p.id===id)
    res.json(product)
 }

 exports.addProduct = (req,res)=>{
   
       products.push(req.body)
        res.json({type:body});
 }

 exports.delProduct = (req,res)=>{
    
    const id = +req.params.id;
    const productIndex = products.findIndex(p =>p.id===id)
    const product = products[productIndex];

    products.splice(productIndex,1)
    res.status(201).json(product);
    


}

exports.replaceProduct = (req,res)=>{
    
    const id = +req.params.id;
    const productIndex = products.findIndex(p =>p.id===id)
    const product = products[productIndex];
    products.splice(productIndex,1,{...product,...req.body})
    res.status(201).json();
}

exports.updateproduct = (req,res)=>{
    
    const id = +req.params.id;
    const productIndex = products.findIndex(p =>p.id===id)
    products.splice(productIndex,1,{...req.body,id:id})
    res.status(201).json();


}
