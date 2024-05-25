const dbConfig = require("../config/db.config");
const { Sequelize } = require("sequelize");

// const sequelize = new Sequelize(
//     dbConfig.DB,
//     dbConfig.USER,
//     dbConfig.PASSWORD,
//     {
//         host: dbConfig.HOST,
//         port: dbConfig.PORT,
//         dialect: dbConfig.dialect,
//         pool: {
//             max: dbConfig.pool.max,
//             min: dbConfig.pool.min,
//             acquire: dbConfig.pool.acquire,
//             idle: dbConfig.pool.idle
//         }
//     }
// );

const sequelize = new Sequelize('postgres://avnadmin:AVNS_sMOWWYgSAaw09e2MpQp@pg-50bd1911-1fb1-4680-88bb-05745d943012-teacher597876040-choreo.e.aivencloud.com:16644/defaultdb')

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.teacher = require("../models/teacher.model.js")(sequelize, Sequelize);

module.exports = db