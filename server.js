const express = require('express')
const connectDB = require('./config/db')
const app = express();

const PORT = 3000;
connectDB();

app.get('/', (req,res) => {
  res.send('server is running')
})
app.listen(PORT, () => {
    console.log(`Server is Running ${PORT}`)
});