
module.exports = (sequelize, Sequelize) => {
    const { DataTypes } = Sequelize
    const VideoJuego = sequelize.define("VideoJuego", {
        titulo: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        precio: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        stock: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        descripcion: {
            type: DataTypes.STRING(100),
            allowNull: false
        }
    })
    return VideoJuego
}