const env = require('./env.js'); // Ruta a `env.js`
const Sequelize = require('sequelize');

const sequelize = new Sequelize(env.database, env.username, env.password, {
    host: env.host,
    dialect: env.dialect,
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    },
    pool: env.pool
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Importa el modelo `juegoalq.model.js`
db.Juego = require('../models/juegoalq.model.js')(sequelize, Sequelize);

module.exports = db;
