require("dotenv").config();
const express = require('express')
const app = express()
const port = 3000
const path = require('path');


const dist = path.join(__dirname, '../dist');

app.use(express.static(dist))


app.get('/', (req, res) => {
  res.send(`we're in business`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})