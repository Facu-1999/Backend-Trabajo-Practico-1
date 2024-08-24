const { where } =  require("sequelize")
const db = require("../models/index.model")
const videoJuego = db.videoJuego

exports.crearVideoJuego = (req, res) => {
    const { titulo, precio, stock, descripcion } = req.body
    videoJuego.create({
        titulo: titulo,
        precio: precio,
        stock: stock,
        descripcion: descripcion
    })
    .then((registro) => {
        res.status(201).json({
            ok: true,
            msg: "VideoJuego creado",
            status: 201,
            data: registro
        })
    })
    .catch((error) => {
        res.status(500).json({
            ok: false,
            msg: "Error al crear el VideoJuego",
            status: 500,
            data: error
        })
    })
}

exports.obtenerVideoJuegos = (req, res) => {
    videoJuego.findAll()
    .then((registros) => {
        res.status(200).json({
            ok: true,
            msg: "Listado de VideJuegos",
            status: 200,
            data: registros
        })
    })
    .catch((error) => {
        res.status(500).json({
            ok: false,
            msg: "Error al obtener la lista de los VideoJuegos",
            status: 500,
            data: error
        })
    })
}


exports.obtenerVideoJuegoPorId = (req, res) => {
    const _id = req.params.id
    videoJuego.findOne({
        where: { id:_id }
    })
    .then((registro) => {
        if(registro){
            res.status(200).json({
                ok: true,
                msg: "VideoJuego encontrado",
                status: 200,
                data: registro
            })
        }else{
            res.status(404).json({
                ok: false,
                msg: "VideoJuego no encontrado",
                status: 404,
                data: null
            })
        }
    })
    .catch((error) => {
        res.status(500).json({
            ok: false,
            msg: "Error al obtener el VideJuego",
            status: 500,
            data: error
        })
    })
}


exports.actualizarVideoJuego = (req, res) => {
    const _id = req.params.id

    const { titulo, precio, stock, descripcion } = req.body
    videoJuego.update({
        titulo: titulo,
        precio: precio,
        stock: stock,
        descripcion: descripcion
    },
    {
       where: { id:_id } 
    })
    .then((registro) => {
        res.status(200).json({
            ok: true,
            msg: "VideoJuego actualizado",
            status: 200,
            data: registro
        })
    })
    .catch((error) => {
        res.status(500).json({
            ok: false,
            msg: "Error al actualizar el VideoJuego",
            status: 500,
            data: error
        })
    })
}


exports.eliminarVideoJuego = (req, res) => {
    const _id = req.params.id
    videoJuego.destroy({
        where: { id: _id }
    })
    .then((registro) => {
        res.status(200).json({
            ok: true,
            msg: "VideJuego eliminado",
            status: 200,
            data: registro
        })
    })
    .catch((error) => {
        res.status(500).json({
            ok: false,
            msg: "Error al eliminar el VideoJuego",
            status: 500,
            data: error
        })
    })
}