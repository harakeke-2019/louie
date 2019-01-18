const express = require('express')
const route = express.Router()
const functions = ('./functions')
const getRandomAnswer = functions.anchor

module.exports = route

route.get('/ed8ball', (req, res) => {
  // res.send('Home route is working')
  res.render('question')
})

route.get('/answers', (req, res) => {
  // res.send('This is the answer page')
  getRandomAnswer((err, answerFile) => {
    if (err) throw err
    let randomId = parseInt(Math.random() * 20)
    let answers = answerFile.randomAns
    let outputAns = answers.find(answer => answer.id == randomId)
    let data = {
      answer: outputAns.answer
    }
    res.render('answer', data)
  })
})
