module.exports = (sequelize, Sequelize) => {
    const Libro = sequelize.define('libro', {
        id_libro: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        titulo: {
            type: Sequelize.STRING(255)
        },
        autor: {
            type: Sequelize.STRING(100)
        },
        isbn: {
            type: Sequelize.STRING(20)
        },
        editorial: {
            type: Sequelize.STRING(100)
        },
        anio_publicacion: {
            type: Sequelize.INTEGER
        },
        categoria: {
            type: Sequelize.STRING(100)
        },
        cantidad_disponible: {
            type: Sequelize.INTEGER
        },
        ubicacion: {
            type: Sequelize.STRING(255)
        }
    });
    return Libro;
};
