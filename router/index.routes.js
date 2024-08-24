module.exports = (app) => {
    rutasVideoJuegos = require("./videoJuego.routes")
    app.use("/Videojuego", rutasVideoJuegos)

    rutasCategorias = require("./categoria.routes")
    app.use("/Categoria", rutasCategorias)

    rutasVideoJuegoXCategoria = require("./videoJuegoXCategoria.routes")
    app.use("/VideoJuegoXCategoria", rutasVideoJuegoXCategoria)

    rutasImagen = require("./imagen.routes")
    app.use("/Imagen", rutasImagen)
}