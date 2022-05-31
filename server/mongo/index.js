
const express = require("express");
require('./config');
const User = require('./users');
const app = express();
app.use(express.json());

app.get("/employee",async(req,res)=>{
    let data = await User.find();
    res.send(data);
})

app.listen(3001);