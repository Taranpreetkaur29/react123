const express = require("express");

const PORT = process.env.PORT || 3001;
var cors = require('cors')
const app = express();
app.use(cors())

app.get("/api", (req, res) => {
    res.status(200).send([{
          id: '1',
          name: 'Riya',
          lastname: 'lalwani',
          email: 'riya123@gmail.com',
          role: 'developer'
        },
        {
          id: '2',
          name: 'kunal',
          lastname: 'thakur',
          email: 'kunalthakur@gmail.com',
          role: 'developer'
        },
        {
          id: '3',
          name: 'Srushti',
          lastname: 'wani',
          email: 'srushti123@gmail.com',
          role: 'developer'
        },
        {
          id: '4',
          name: 'tanu',
          lastname: 'datt',
          email: 'tanudatt@gmail.com',
          role: 'developer'
        }]

    );
});
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});