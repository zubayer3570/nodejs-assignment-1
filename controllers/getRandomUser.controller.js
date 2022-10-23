const fs = require("fs")
module.exports.getRandomUser = (req, res)=>{

    fs.readFile('user-data.json', (err, data)=>{
        const parsedData = JSON.parse(data)
        const randomNumber = Math.round(Math.random() * (parsedData.length - 1))
        const randomUser = parsedData[randomNumber]
        randomUser.dirName = __dirname
        res.send(randomUser)
    })
}