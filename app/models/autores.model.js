module.exports = (sequelize, Sequelize) => {
    const Autor = sequelize.define('autor', {
        id_autor: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: Sequelize.STRING(100)
        },
        apellido: {
            type: Sequelize.STRING(100)
        },
        nacionalidad: {
            type: Sequelize.STRING(50)
        },
        fecha_nacimiento: {
            type: Sequelize.DATE
        }
    });
    return Autor;
};
