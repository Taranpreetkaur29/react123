const { request } = require("express");
const express = require("express");
require('./config');
const User = require('./users');
const app = express();
app.use(express.json());

app.get('/employee',async(req,res)=>{
    const{que,page,size}=req.query.params
    let data = await User.find();

    let user =User.find({
        "$or":[
            {"name":{$regex:que,$options: "i"}},
            {"lastName":{$regex:que,$options: "i"}},
            {"email":{$regex:que,$options: "i"}},
            {"role":{$regex:que,$options: "i"}}
        ]
    });
    let users =User.find();
    let firstPage=0;
    let firstSize=0;

    if(que){
        !page ?firstPage=1:firstPage =page;
        !size ?firstSize=1:firstSize =size;
    }else{
        firstPage=page;
        firstSize=size;
    }
    que?
    res.send(user)
    :
    res.send(data)
})
app.listen(3001);