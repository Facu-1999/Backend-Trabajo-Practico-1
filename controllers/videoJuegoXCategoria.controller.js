const { where } =  require("sequelize")
const db = require("../models/index.model")

const videoJuegoXCategoria = db.videoJuegoXCategoria

exports.crearVideoJuegoXCategoria = (req, res) => {
    const { VideoJuegoId, CategoriumId } = req.body
    videoJuegoXCategoria.create({
        VideoJuegoId:  VideoJuegoId,
        CategoriumId: CategoriumId
    })
    .then((registro) => {
        res.status(201).json({
            ok: true,
            msg: "VideoJuego por categoria creado correctamente",
            status: 201,
            data: registro
        })
    })
    .catch((error) => {
        res.status(500).json({
            ok: false,
            msg: "Error al crear el VideoJuego por categoria",
            status: 500,
            data: error
        })
    })
}

exports.obtenerVideoJuegoXCategorias = (req, res) => {
    videoJuegoXCategoria.findAll({
        include: [
            {
                model: db.videoJuego
            },
            {
                model: db.categoria
            }
        ]
    })
    .then((registros) => {
        res.status(200).json({
            ok: true,
            msg: "Listado de VideJuegos por categorias",
            status: 200,
            data: registros
        })
    })
    .catch((error) => {
        res.status(500).json({
            ok: false,
            msg: "Error al obtener la lista de los VideoJuegos por categorias",
            status: 500,
            data: error
        })
    })
}


exports.obtenerVideoJuegoXCategoriaPorId = (req, res) => {
    const _id = req.params.id
    videoJuegoXCategoria.findOne({
        where: { id:_id }
    })
    .then((registro) => {
        if(registro){
            res.status(200).json({
                ok: true,
                msg: "VideoJuego por categoria encontrado correctamente",
                status: 200,
                data: registro
            })
        }else{
            res.status(404).json({
                ok: false,
                msg: "VideoJuego por categoria no encontrado",
                status: 404,
                data: null
            })
        }
    })
    .catch((error) => {
        res.status(500).json({
            ok: false,
            msg: "Error al obtener el VideoJuego por categoria",
            status: 500,
            data: error
        })
    })
}


exports.actualizarVideoJuegoXCategoria = (req, res) => {
    const _id = req.params.id

    const { VideoJuegoId, CategoriumId } = req.body
    videoJuegoXCategoria.update({
        VideoJuegoId: VideoJuegoId,
        CategoriumId: CategoriumId
    },
    {
       where: { id:_id } 
    })
    .then((registro) => {
        res.status(200).json({
            ok: true,
            msg: "VideoJuego por categoria actualizado",
            status: 200,
            data: registro
        })
    })
    .catch((error) => {
        res.status(500).json({
            ok: false,
            msg: "Error al actualizar el VideoJuego por categoria",
            status: 500,
            data: error
        })
    })
}


exports.eliminarVideoJuegoXCategoria = (req, res) => {
    const _id = req.params.id
    videoJuegoXCategoria.destroy({
        where: { id: _id }
    })
    .then((registro) => {
        res.status(200).json({
            ok: true,
            msg: "VideJuego por categoria eliminado",
            status: 200,
            data: registro
        })
    })
    .catch((error) => {
        res.status(500).json({
            ok: false,
            msg: "Error al eliminar el VideoJuego por categoria",
            status: 500,
            data: error
        })
    })
}