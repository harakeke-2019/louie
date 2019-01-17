const express = require('express')
const route = express.Router()

module.exports = route

route.get('/ED8BallHome', (req, res) => {
  res.send('Yeah we get it!!!')
})

route.get('/AnswerPage', (req, res) => {
  res.send('This is the answer page')
})
