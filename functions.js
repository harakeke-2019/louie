const answers = require("./data/answers.json")
const path = require("path")
const fs = require("fs")

module.export = getRandomAnswer

function getRandomAnswer (callback) {

        const filePath = path.join(__dirname, 'data/answers.json')
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) throw err
            const randomAnswer = JSON.parse(data)
            callback(randomAnswer)         
        })
    // take that random number and make it ID
    // call ID in answers and grab that ID's 'answer' property 
    // return that answer 
}

function getAnswer(ans){
    //console.log (ans.randomAns)
    let answerO = ans.randomAns
    let randomId = parseInt(Math.random() * 3)
    // console.log(randomId)

    // console.log(id)
    // use find to find ans.id and = randomId
   let outPutAnswer = answerO.find(element => 
    element.id == randomId) 
    console.log(outPutAnswer.answer)
    return outPutAnswer.answer
}

console.log(getRandomAnswer(getAnswer))
//console.log(getRandomAnswer(logData))
//console.log(getRandomAnswer())

