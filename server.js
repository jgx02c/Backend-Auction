const express = require('express')
const router = express.Router()
const app = express()
const port = 3000

//Middleware for JSON web token
const jwt = require('jsonwebtoken');



//import the routes
const user = require('./routes/user')
const listings = require('./routes/listings')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
      