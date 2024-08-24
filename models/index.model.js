const Sequelize = require("sequelize")
const config = require("../config/index.config")

const sequelize = new Sequelize(
    config.db.schema,
    config.db.user,
    config.db.password,
    {
        host: config.db.host,
        dialect: config.db.dialect,
        port: config.db.port
    }
)

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.videoJuego = require("./videoJuego.model")(sequelize, Sequelize)
db.categoria = require("./categoria.model")(sequelize, Sequelize)
db.videoJuegoXCategoria = require("./videoJuegoXCategoria.model")(sequelize, Sequelize)
db.imagen = require("./imagen.model")(sequelize, Sequelize)

//Cardinalidad N a M entre videoJuego y categoria
db.videoJuego.hasMany(db.videoJuegoXCategoria)
db.categoria.hasMany(db.videoJuegoXCategoria)
db.videoJuegoXCategoria.belongsTo(db.videoJuego)
db.videoJuegoXCategoria.belongsTo(db.categoria)

//Un videoJuego puede tener muchas imagenes  ( 1 a N ) y muchas imagenes pertenecen a un videojuego
db.videoJuego.hasMany(db.imagen)
db.imagen.belongsTo(db.videoJuego)


module.exports = db