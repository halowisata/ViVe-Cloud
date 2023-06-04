require('dotenv').config();

const express = require('express');
const sequelize = require('./config/database');

const app = express();

const init = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connecting to database...');

    app.listen(process.env.PORT, () => console.log(`Server start in port ${process.env.PORT}`));
  } catch (error) {
    console.error(`Unable to connect database: ${error}`);
  }
};

init();
