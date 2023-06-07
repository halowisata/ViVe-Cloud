const getSecret = require('../helpers');

require('dotenv').config();

module.exports = {
  development: {
    username: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    host: process.env.MYSQL_HOST,
    dialect: process.env.MYSQL_DIALECT,
  },
  test: {
    username: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    host: process.env.MYSQL_HOST,
    dialect: process.env.MYSQL_DIALECT,
  },
  production: async () => {
    const username = process.env.GITHUB_ACTION
      ? process.env.MYSQL_USERNAME
      : await getSecret('MYSQL_USERNAME');
    const password = process.env.GITHUB_ACTION
      ? process.env.MYSQL_PASSWORD
      : await getSecret('MYSQL_PASSWORD');
    const database = process.env.GITHUB_ACTION
      ? process.env.MYSQL_DATABASE
      : await getSecret('MYSQL_DATABASE');
    const host = process.env.GITHUB_ACTION
      ? process.env.MYSQL_HOST
      : await getSecret('MYSQL_HOST');
    const dialect = process.env.GITHUB_ACTION
      ? process.env.MYSQL_DIALECT
      : await getSecret('MYSQL_DIALECT');

    return {
      username,
      password,
      database,
      host,
      dialect,
      dialectOptions: {
        socketPath: (await getSecret('MYSQL_HOST')).startsWith('/path/to/socket')
          ? await getSecret('MYSQL_HOST')
          : undefined,
      },
    };
  },
};
