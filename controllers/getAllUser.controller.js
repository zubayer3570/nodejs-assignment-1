const fs = require("fs")
module.exports.getAllUser = (req, res)=>{
    const file = fs.readFile('user-data.json', (err, data)=>{
        const parsedData = JSON.parse(data)
        res.send(parsedData)
    })
}