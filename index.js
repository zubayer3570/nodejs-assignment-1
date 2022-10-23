const express = require("express")
const randomUser = require("./routes/randomUser.route")
const allUser = require("./routes/allUser.route")
const saveUser = require("./routes/saveUser.route")
const updateUser  = require("./routes/updateUser.route")
const updateBulk  = require("./routes/updateBulk.route")
const deleteUser  = require("./routes/deleteUser.router")
const app = express()
app.use(express.json())


app.use('/user/random', randomUser)
app.use('/user/all', allUser)
app.use('/user/save', saveUser)
app.use('/user/update', updateUser)
app.use('/user/bulk-update', updateBulk)
app.use('/user/delete', deleteUser)


app.listen(8080, ()=>console.log("server is working fine!"))