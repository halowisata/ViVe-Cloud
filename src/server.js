require('dotenv').config();

const express = require('express');
const sequelize = require('./config/database');
const userRoutes = require('./api/v1/users/routes');
const authenticationRoutes = require('./api/v1/authentications/routes');

const app = express();

const init = async () => {
  try {
    await sequelize.authenticate();

    app.use(express.json());
    app.use('/api/v1/users', userRoutes);
    app.use('/api/v1/authentications', authenticationRoutes);

    app.all('*', (req, res, next) => {
      const err = new Error(`Can't find ${req.originalUrl} on this server!`);
      err.status = 404;
      err.statusCode = 404;
      next(err);
    });

    app.use((err, req, res, next) => {
      err.statusCode = err.statusCode || 500;
      err.status = err.status || 'error';
      res.status(err.statusCode).json({
        error: true,
        message: err.message,
      });
    });

    app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
  } catch (error) {
    console.error(`Unable to run server: ${error}`);
  }
};

init();
