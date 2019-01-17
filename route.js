const express = require('express')
const route = express.Router()

module.exports = route

route.get('/ed8ball', (req, res) => {
  res.send('Home route is working')
})

route.get('/answers', (req, res) => {
  res.send('This is the answer page')
})
