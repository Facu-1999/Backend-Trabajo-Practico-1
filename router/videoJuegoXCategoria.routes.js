const Rutas = require("express").Router()
const controladorVideoJuegoXCategoria = require("../controllers/videoJuegoXCategoria.controller")

Rutas.post("/", controladorVideoJuegoXCategoria.crearVideoJuegoXCategoria)
Rutas.get("/", controladorVideoJuegoXCategoria.obtenerVideoJuegoXCategorias)
Rutas.get("/:id", controladorVideoJuegoXCategoria.obtenerVideoJuegoXCategoriaPorId)
Rutas.put("/:id", controladorVideoJuegoXCategoria.actualizarVideoJuegoXCategoria) 
Rutas.delete("/:id", controladorVideoJuegoXCategoria.eliminarVideoJuegoXCategoria)

module.exports = Rutas