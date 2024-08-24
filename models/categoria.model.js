module.exports = (sequelize, Sequelize) => {
    const { DataTypes } = Sequelize
    const Categoria = sequelize.define("Categoria", {
        nombre: {
            type: DataTypes.STRING(100),
            allowNull: false
        }
    })
    return Categoria
}