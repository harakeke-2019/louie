const answers = require("./data/answers.json")
const path = require("path")
const fs = require("fs")

module.export = getRandomAnswer

function getRandomAnswer (callback) {

        const filePath = path.join(__dirname, 'data/answers.json')
        fs.readFile(filePath, 'utf-8', (err, data) => {

            if (err) throw err
            const randomAnswer = JSON.parse(data)
            callback(randomAnswer)         
        })
    // take that random number and make it ID
    // call ID in answers and grab that ID's 'answer' property 
    // return that answer 
}

function getAnswer(ans){
    console.log (typeof ans.randomAns)
    let randomId = Math.floor(Math.random() * (21))
    // console.log(randomId)

    // console.log(id)
    // use find to find ans.id and = randomId
    let outPutAnswer = ans.find(element => element.id == randomId) 
   //console.log(outPutAnswer)
}

getRandomAnswer(getAnswer)
//console.log(getRandomAnswer(logData))
//console.log(getRandomAnswer())

