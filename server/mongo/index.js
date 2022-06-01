const express = require("express");
require('./config');
const User = require('./users');
const app = express();
const cors = require('cors');
const users = require("./users");
app.use(cors());

app.get("/employee", async (req, res) => {

    const { que, page, size } = req.query;
    let searchData;
    if(que.length === 0){
        searchData = await User.find({});
    } else {
        searchData = await User.find({
            "$or": [
                { "name": { $regex: que, $options: "i" } },
                { "lastName": { $regex: que, $options: "i" } },
                { "email": { $regex: que, $options: "i" } },
                { "role": { $regex: que, $options: "i" } }
            ]
        });
    }
     
    let firstPage = 0;
    let firstSize = 0;

    if (que) {
        !page ? firstPage = 1 : firstPage = page;
        !size ? firstSize = 1 : firstSize = size;
    } else {
        firstPage = page;
        firstSize = size;
    }
    res.send(searchData);
})

app.listen(3001);