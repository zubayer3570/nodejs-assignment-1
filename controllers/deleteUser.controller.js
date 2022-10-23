const fs = require("fs")
module.exports.deleteUser = (req, res) => {
    const userData = req.body
    fs.readFile('user-data.json', (err, data) => {
        const parsedData = JSON.parse(data)
        const newData = parsedData.filter(user => user.id !== userData.id)
        fs.writeFile('user-data.json', JSON.stringify(newData), (err)=> console.log(err))
        res.send({ message: "success" })
    })
}