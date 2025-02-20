// const http = require('http');

const express = require('express');
const fs = require('fs');
const index = fs.readFileSync('index.html','UTF-8');
const data = JSON.parse(fs.readFileSync('data.json','UTF-8'));
const products = data.products;
const productRouter = require('./route/product')
const userRouter = require('./route/user')



const { type } = require('os');

// const express = require('express');
const morgan = require('morgan');
const server = express();
server.use(express.json());
server.use('/products',productRouter.router);
server.use('/user',userRouter.router);


//middlewere  concept start
//bodyParser

// server.use((req,res,next)=>{
//     console.log(req.method ,req.ip, req.hostname,new Date() , req.get('user-Agent'))
//     next()
// })

//server.use(morgan('default'))
// const auth = (req,res,next)=>{
//     // console.log(req.query)
//     if(req.body.password == '123'){
//      next();
//     }else{
//         res.sendStatus(401)
//     }
//     next()
// }
// server.use(auth);


//API - endpoint
//Api root ,base URL
//crete 

//Api code  stated from heare

// const getonProduct = (req,res)=>{
//        res.json(products);
// }
    

// const getProduct = (req,res)=>{
    
//     const id = +req.params.id;
//     const product = products.find(p =>p.id===id)
//     res.json(product)
//  }

//  const addProduct = (req,res)=>{
   
//        products.push(req.body)
//         res.json({type:body});
//  }

//  const delProduct = (req,res)=>{
    
//     const id = +req.params.id;
//     const productIndex = products.findIndex(p =>p.id===id)
//     const product = products[productIndex];

//     products.splice(productIndex,1)
//     res.status(201).json(product);
    


// }

// const replaceProduct = (req,res)=>{
    
//     const id = +req.params.id;
//     const productIndex = products.findIndex(p =>p.id===id)
//     const product = products[productIndex];
//     products.splice(productIndex,1,{...product,...req.body})
//     res.status(201).json();
// }

// const updateproduct = (req,res)=>{
    
//     const id = +req.params.id;
//     const productIndex = products.findIndex(p =>p.id===id)
//     products.splice(productIndex,1,{...req.body,id:id})
//     res.status(201).json();


// }




    //delete
    // server.delete('/products/:id',(req,res)=>{
    
    //     const id = +req.params.id;
    //     const productIndex = products.findIndex(p =>p.id===id)
    //     const product = products[productIndex];

    //     products.splice(productIndex,1)
    //     res.status(201).json(product);
    


    
    // })

//read get product
// server.get('/products',(req,res)=>{
//     res.json(products);



//);

//create API POST
// server.post('/products',(req,res)=>{
//     console.log(req.body);
//     products.push(req.body)
//     res.json({type:body});


// })
// server.put('/',(req,res)=>{
//     res.json({type:'PUT'});

// })
// server.delete('/',(req,res)=>{
//     res.json({type:'DELETE'});

// })
// server.patch('/',(req,res)=>{
//     res.json({type:'PATCH'});

// })



server.get('/demo',(req,res)=>{
    // res.send("hrloo");
    // res.sendFile('C:/Users/prati/OneDrive/Desktop/node in one  video/index.html');
    res.json(products);
})












server.listen(8088, ()=>{
    console.log("server started..")
});








// // const data = {age:5}
// const server = http.createServer((req,res)=>{
//     // res.end("<h1> hellow </h1>")
  
//      console.log(req.url)

// if(req.url.startsWith('/product')){
//     const id = req.url.split('/')[2]
//    const product = products.find(p=>p.id=== (+id))
//    console.log(product);
//    res.setHeader('Content-Type','text/html')
//       let modifiedindex = index.replace('**title**',product.title)
//        res.end(modifiedindex);
//        return

       
// }




//     switch(req.url){
//         case '/':
//      res.setHeader('Content-Type','text/html');
//      res.end(index);
//      break;
//      case '/api':
//         res.setHeader('Content-Type','application/json')
//         res.end(JSON.stringify(data));
//         break;
    
        
//     }
//      console.log('server started');


//     res.end(data);

    

// })



// server.listen(8088)


//assingnment





