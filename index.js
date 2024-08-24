const express = require("express")
const app = express()
const port = 3000

app.use(express.json())

const db = require("./models/index.model")
db.sequelize.sync()
.then(() => {
    console.log("Base de datos conectada")
})
.catch((error) => {
    console.log("Error al conectar la base de datos:", error)
})
require("./router/index.routes")(app)
app.listen(port, () =>{
    console.log("El servidor esta corriendo en el puerto", port)
})