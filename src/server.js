require('dotenv').config();

const express = require('express');
const sequelize = require('./config/database');
const userRoutes = require('./api/v1/users/routes');

const app = express();

const init = async () => {
  try {
    await sequelize.authenticate();

    app.use('/users', userRoutes);

    app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
  } catch (error) {
    console.error(`Unable to run the server: ${error}`);
  }
};

init();
