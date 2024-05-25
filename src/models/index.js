const dbConfig = require("../config/db.config");
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        },
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            },
            keepAlive: true,
        },
        ssl: true

    }
);

// const sequelize = new Sequelize('postgres://haja:LhV24S0yRGxvyw9qERKSh8D16oNSl4o6@dpg-cp7j90e3e1ms73alkiig-a/teacherservice')

try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.teacher = require("../models/teacher.model.js")(sequelize, Sequelize);

module.exports = db