const fs = require("fs")
module.exports.getRandomUser = (req, res)=>{
    const file = fs.readFile('user-data.json', (err, data)=>{
        const parsedData = JSON.parse(data)
        const randomNumber = Math.round(Math.random() * (parsedData.length - 1))
        const randomUser = parsedData[randomNumber]
        res.send(randomUser)
    })
}