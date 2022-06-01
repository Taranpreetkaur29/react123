const { request } = require("express");
const express = require("express");
require('./config');
const User = require('./users');
const app = express();
app.use(express.json());

app.get("/employee",async(req,res)=>{
    let data = await User.find();
    res.send(data);
})

let users =User.find();
const {que,page,size,}=request.que;

let firstPage=0;
let firstSize=0;

if(que){
    !page ?firstPage=1:firstPage =page;
    !size ?firstSize=1:firstSize =size;
}else{
    firstPage=page;
    firstSize=size;
}

let user =User.find({
    "$or":[
        {"name":{$regex:que,$options: "i"}},
        {"lastName":{$regex:que,$options: "i"}},
        {"email":{$regex:que,$options: "i"}},
        {"role":{$regex:que,$options: "i"}}
    ]
});

app.listen(3001);