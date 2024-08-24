module.exports = (sequelize, Sequelize) => {
    const { DataTypes } = Sequelize
    const Imagen = sequelize.define("Imagen", {
        ubicacion: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        numero_de_orden: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    })
    return Imagen
}