const fs = require("fs")
module.exports.updateUser = (req, res) => {
    const userUpdate = req.body
    fs.readFile('user-data.json', (err, data) => {
        const parsedData = JSON.parse(data)
        parsedData.find(user => {
            if(user.id === userUpdate.id){
                const updateField = Object.keys(userUpdate)[1]
                user[updateField] = userUpdate[updateField]
            }
            fs.writeFile('user-data.json', JSON.stringify(parsedData), (err)=> console.log(err))
        })
        res.send({ message: "success" })
    })
}