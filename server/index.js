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
          name: 'Sahej',
          lastName: 'uppal',
          email: 'sahej@gmail.com',
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
          name: 'Tanu',
          lastName: 'datt',
          email: 'tanudatt@gmail.com',
          role: 'developer'
        },
        {
          id: '5',
          name: 'Arushi',
          lastName: 'joshi',
          email: 'arushi@gmail.com',
          role: 'developer'
        },
        {
          id: '6',
          name: 'Babanpreet',
          lastName: 'kaur',
          email: 'babanpreet@gmail.com',
          role: 'developer'
        },
        {
          id: '7',
          name: 'Jagmeet singh',
          lastName: 'Khokhar',
          email: 'jaggu@gmail.com',
          role: 'developer'
        },
        {
          id: '8',
          name: 'Srushti',
          lastName: 'wani',
          email: 'srushti123@gmail.com',
          role: 'developer'
        },
        {
          id: '9',
          name: 'Tanu',
          lastName: 'datt',
          email: 'tanudatt@gmail.com',
          role: 'developer'
        },
        {
          id: '10',
          name: 'Arushi',
          lastName: 'joshi',
          email: 'arushi@gmail.com',
          role: 'developer'
        },
        {
          id: '11',
          name: 'Babanpreet',
          lastName: 'kaur',
          email: 'babanpreet@gmail.com',
          role: 'developer'
        },
        {
          id: '12',
          name: 'Srushti',
          lastName: 'wani',
          email: 'srushti123@gmail.com',
          role: 'developer'
        },
        {
          id: '13',
          name: 'Tanu',
          lastName: 'datt',
          email: 'tanudatt@gmail.com',
          role: 'developer'
        },
        {
          id: '14',
          name: 'Arushi',
          lastName: 'joshi',
          email: 'arushi@gmail.com',
          role: 'developer'
        },
        {
          id: '15',
          name: 'Babanpreet',
          lastName: 'kaur',
          email: 'babanpreet@gmail.com',
          role: 'developer'
        },
        {
          id: '16',
          name: 'Srushti',
          lastName: 'wani',
          email: 'srushti123@gmail.com',
          role: 'developer'
        },
        {
          id: '17',
          name: 'Tanu',
          lastName: 'datt',
          email: 'tanudatt@gmail.com',
          role: 'developer'
        },
        {
          id: '18',
          name: 'Arushi',
          lastName: 'joshi',
          email: 'arushi@gmail.com',
          role: 'developer'
        },
        {
          id: '19',
          name: 'Babanpreet',
          lastName: 'kaur',
          email: 'babanpreet@gmail.com',
          role: 'developer'
        },
        {
          id: '20',
          name: 'Srushti',
          lastName: 'wani',
          email: 'srushti123@gmail.com',
          role: 'developer'
        },
        {
          id: '21',
          name: 'Tanu',
          lastName: 'datt',
          email: 'tanudatt@gmail.com',
          role: 'developer'
        },
        {
          id: '22',
          name: 'Arushi',
          lastName: 'joshi',
          email: 'arushi@gmail.com',
          role: 'developer'
        },
        {
          id: '23',
          name: 'Babanpreet',
          lastName: 'kaur',
          email: 'babanpreet@gmail.com',
          role: 'developer'
        },
        {
          id: '24',
          name: 'Srushti',
          lastName: 'wani',
          email: 'srushti123@gmail.com',
          role: 'developer'
        },
        {
          id: '25',
          name: 'Tanu',
          lastName: 'datt',
          email: 'tanudatt@gmail.com',
          role: 'developer'
        },
        {
          id: '26',
          name: 'Arushi',
          lastName: 'joshi',
          email: 'arushi@gmail.com',
          role: 'developer'
        },
        {
          id: '27',
          name: 'Babanpreet',
          lastName: 'kaur',
          email: 'babanpreet@gmail.com',
          role: 'developer'
        },
        {
          id: '28',
          name: 'Srushti',
          lastName: 'wani',
          email: 'srushti123@gmail.com',
          role: 'developer'
        },
        {
          id: '29',
          name: 'Tanu',
          lastName: 'datt',
          email: 'tanudatt@gmail.com',
          role: 'developer'
        },
        {
          id: '30',
          name: 'Arushi',
          lastName: 'joshi',
          email: 'arushi@gmail.com',
          role: 'developer'
        },
        {
          id: '31',
          name: 'Babanpreet',
          lastName: 'kaur',
          email: 'babanpreet@gmail.com',
          role: 'developer'
        },
      ]

    );
});
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});