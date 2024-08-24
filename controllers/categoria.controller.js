const { where } =  require("sequelize")
const db = require("../models/index.model")
const categoria = db.categoria

exports.crearCategoria = (req, res) => {
    const { nombre } = req.body
    categoria.create({
        nombre: nombre
    })
    .then((registro) => {
        res.status(201).json({
            ok: true,
            msg: "Categoria creada",
            status: 201,
            data: registro
        })
    })
    .catch((error) => {
        res.status(500).json({
            ok: false,
            msg: "Error al crear la categoria",
            status: 500,
            data: error
        })
    })
}

exports.obtenerCategorias = (req, res) => {
    categoria.findAll()
    .then((registros) => {
        res.status(200).json({
            ok: true,
            msg: "Listado de Categorias",
            status: 200,
            data: registros
        })
    })
    .catch((error) => {
        res.status(500).json({
            ok: false,
            msg: "Error al obtener la lista de las categorias",
            status: 500,
            data: error
        })
    })
}


exports.obtenerCategoriaPorId = (req, res) => {
    const _id = req.params.id
    categoria.findOne({
        where: { id:_id }
    })
    .then((registro) => {
        if(registro){
            res.status(200).json({
                ok: true,
                msg: "Categoria encontrada",
                status: 200,
                data: registro
            })
        }else{
            res.status(404).json({
                ok: false,
                msg: "Categoria no encontrada",
                status: 404,
                data: null
            })
        }
    })
    .catch((error) => {
        res.status(500).json({
            ok: false,
            msg: "Error al obtener la categoria",
            status: 500,
            data: error
        })
    })
}


exports.actualizarCategoria = (req, res) => {
    const _id = req.params.id

    const { nombre } = req.body
    categoria.update({
        nombre: nombre
    },
    {
       where: { id:_id } 
    })
    .then((registro) => {
        res.status(200).json({
            ok: true,
            msg: "Categoria actualizada",
            status: 200,
            data: registro
        })
    })
    .catch((error) => {
        res.status(500).json({
            ok: false,
            msg: "Error al actualizar la categoria",
            status: 500,
            data: error
        })
    })
}


exports.eliminarCategoria = (req, res) => {
    const _id = req.params.id
    categoria.destroy({
        where: { id: _id }
    })
    .then((registro) => {
        res.status(200).json({
            ok: true,
            msg: "Categoria eliminada",
            status: 200,
            data: registro
        })
    })
    .catch((error) => {
        res.status(500).json({
            ok: false,
            msg: "Error al eliminar la categoria",
            status: 500,
            data: error
        })
    })
}