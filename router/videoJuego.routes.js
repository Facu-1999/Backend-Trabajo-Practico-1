const Rutas = require("express").Router()
const controladorVideoJuego = require("../controllers/videoJuego.controller")

Rutas.post("/", controladorVideoJuego.crearVideoJuego)
Rutas.get("/", controladorVideoJuego.obtenerVideoJuegos)
Rutas.get("/:id", controladorVideoJuego.obtenerVideoJuegoPorId)
Rutas.put("/:id", controladorVideoJuego.actualizarVideoJuego) 
Rutas.delete("/:id", controladorVideoJuego.eliminarVideoJuego)

module.exports = Rutas
