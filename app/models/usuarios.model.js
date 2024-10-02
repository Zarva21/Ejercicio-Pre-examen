module.exports = (sequelize, Sequelize) => {
    const Usuario = sequelize.define('usuario', {
        id_usuario: {
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
        email: {
            type: Sequelize.STRING(100)
        },
        telefono: {
            type: Sequelize.STRING(20)
        },
        direccion: {
            type: Sequelize.STRING(255)
        },
        fecha_registro: {
            type: Sequelize.DATE
        },
        estado: {
            type: Sequelize.STRING(50)
        }
    });
    return Usuario;
};
