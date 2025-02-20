
const fs = require('fs');
// const index = fs.readFileSync('index.html','UTF-8');
const data = JSON.parse(fs.readFileSync('data.json','UTF-8'));
const users = data.users;



exports.getallUsers = (req,res)=>{
       res.json(users);
}
    

exports.getUser = (req,res)=>{
    
    const id = +req.params.id;
    const user = users.find(p =>p.id===id)
    res.json(user)
 }

 exports.addUser = (req,res)=>{
   
       users.push(req.body)
        res.json({type:body});
 }

 exports.delUser = (req,res)=>{
    
    const id = +req.params.id;
    const userIndex = users.findIndex(p =>p.id===id)
    const user = users[userIndex];

    users.splice(userIndex,1)
    res.status(201).json(user);
    


}

exports.replaceUser = (req,res)=>{
    
    const id = +req.params.id;
    const userIndex = users.findIndex(p =>p.id===id)
    const user = users[userIndex];
    users.splice(userIndex,1,{...product,...req.body})
    res.status(201).json();
}

exports.updateUser = (req,res)=>{
    
    const id = +req.params.id;
    const userIndex = users.findIndex(p =>p.id===id)
    users.splice(userIndex,1,{...req.body,id:id})
    res.status(201).json();


}
