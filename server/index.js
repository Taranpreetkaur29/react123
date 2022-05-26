const express = require("express");

const PORT = process.env.PORT || 3001;
var cors = require('cors')
const app = express();
app.use(cors())

app.get("/api", (req, res) => {
    res.status(200).send([{
          id: '1',
          name: 'Riya',
          lastName: 'lalwani',
          email: 'riya123@gmail.com',
          role: 'developer'
        },
        {
          id: '2',
          name: 'kunal',
          lastName: 'thakur',
          email: 'kunalthakur@gmail.com',
          role: 'developer'
        },
        {
          id: '3',
          name: 'Srushti',
          lastName: 'wani',
          email: 'srushti123@gmail.com',
          role: 'developer'
        },
        {
          id: '4',
          name: 'tanu',
          lastName: 'datt',
          email: 'tanudatt@gmail.com',
          role: 'developer'
        }]

    );
});
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});