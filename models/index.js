require('dotenv').config();
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const getSecret = require('../helpers');

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(`${__dirname}/../config/config.js`)[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  const secretValue = await getSecret(process.env[config.use_env_variable]);
  sequelize = new Sequelize(secretValue.trim(), config);
} else {
  const sequelizeConfig = {
    ...config,
  };

  if (env === 'development') {
    sequelizeConfig.database = process.env.MYSQL_DATABASE;
    sequelizeConfig.username = process.env.MYSQL_USERNAME;
    sequelizeConfig.password = process.env.MYSQL_PASSWORD;
    sequelizeConfig.host = process.env.MYSQL_HOST;
  } else if (env === 'production') {
    const mysqlHost = process.env.GITHUB_ACTION ? process.env.MYSQL_HOST : await getSecret('MYSQL_HOST');
    const mysqlDatabase = process.env.GITHUB_ACTION ? process.env.MYSQL_DATABASE : await getSecret('MYSQL_DATABASE');
    const mysqlUsername = process.env.GITHUB_ACTION ? process.env.MYSQL_USERNAME : await getSecret('MYSQL_USERNAME');
    const mysqlPassword = process.env.GITHUB_ACTION ? process.env.MYSQL_PASSWORD : await getSecret('MYSQL_PASSWORD');

    sequelizeConfig.database = mysqlDatabase.trim();
    sequelizeConfig.username = mysqlUsername.trim();
    sequelizeConfig.password = mysqlPassword.trim();

    sequelizeConfig.dialectOptions = {
      socketPath: mysqlHost.trim().startsWith('/path/to/socket') ? mysqlHost.trim() : undefined,
    };
  }

  sequelize = new Sequelize(sequelizeConfig);
}

fs.readdirSync(__dirname)
  .filter((file) => (
    file.indexOf('.') !== 0
      && file !== basename
      && file.slice(-3) === '.js'
      && file.indexOf('.test.js') === -1
  ))
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
