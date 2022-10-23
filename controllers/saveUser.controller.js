const fs = require("fs")
module.exports.saveUser = (req, res) => {
    fs.readFile('user-data.json', (err, data) => {
        const parsedData = JSON.parse(data)
        parsedData.push(req.body)
        fs.writeFile('user-data.json', JSON.stringify(parsedData), (err)=> console.log(err))
        res.send({ message: "success" })
    })
}