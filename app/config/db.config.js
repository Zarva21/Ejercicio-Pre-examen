const env = require('./env.js');
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
    

    pool: {
        max: env.pool.max,
        min: env.pool.min,
        acquire: env.pool.acquire,
        idle: env.pool.idle,
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Usuarios = require('../models/usuarios.model.js')(sequelize, Sequelize);
db.Libros = require('../models/libros.model.js')(sequelize, Sequelize);
db.Autores = require('../models/autores.model.js')(sequelize, Sequelize);


module.exports = db;