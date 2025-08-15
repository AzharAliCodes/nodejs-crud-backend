const express = require('express')
const connectDB = require('./config/db')
const Item = require('./models/itemModel')
require('dotenv').config();
const app = express();

const PORT = 3000;
connectDB();

app.get('/', (req,res) => {
  res.send('server is running')
})

app.post('/test-add', async (req, res) => {
  try{
    const newItem = new Item({
      name: 'Ali',
      email:'ali@example.com',
      phone:'12344567890'
    });
    const saved = await newItem.save();
    res.status(201).json(saved);
  }catch(err){
    res.status(400).json({err: err.message})
  }
})
app.listen(PORT, () => {
    console.log(`Server is Running ${PORT}`)
});