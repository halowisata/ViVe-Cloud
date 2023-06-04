const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  process.env.MYSQL_DATABASE,
  process.env.MYSQL_USERNAME,
  process.env.MYSQL_PASSWORD,
  {
    host: process.env.HOST,
    dialect: process.env.MYSQL_DIALECT,
  },
);

module.exports = sequelize;
