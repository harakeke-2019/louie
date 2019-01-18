const express = require('express')
const route = express.Router()
//const functions = require('./functions')

module.exports = route

route.get('/ed8ball', (req, res) => {
  // res.send('Home route is working')
  res.render('question')
})

// route.get('/answers', (req, res) => {
//   //res.send('This is the answer page')

//   let randomAns = functions.getRandomAns()
//   let data = {
//     answer: randomAns
//   }
//   res.render('answer', data)
// })
