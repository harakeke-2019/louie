const path = require('path')
const fs = require('fs')

module.export = {getRandomAnswer}

function getRandomAnswer (callback) {
  const filePath = path.join(__dirname, 'data/answers.json')
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) throw err
    const randomAnswer = JSON.parse(data)
    callback(null, randomAnswer)
  })
}
