const Sequelize = require('sequelize');

const sequelizeConfig = {
  host: process.env.MYSQL_HOST,
  dialect: process.env.MYSQL_DIALECT,
};

if (process.env.NODE_ENV === 'production') {
  sequelizeConfig.dialectOptions = {
    socketPath: process.env.MYSQL_HOST,
  };
}

const sequelize = new Sequelize(
  process.env.MYSQL_DATABASE,
  process.env.MYSQL_USERNAME,
  process.env.MYSQL_PASSWORD,
  sequelizeConfig,
);

module.exports = sequelize;
