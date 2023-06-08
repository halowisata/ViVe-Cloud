require('dotenv').config();

const express = require('express');
const cors = require('cors');
const userRoutes = require('./api/v1/users/routes');
const authenticationRoutes = require('./api/v1/authentications/routes');

const app = express();

const init = async () => {
  const allowedOrigins = ['*'];

  app.use(cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        const message = `The CORS policy for this application doesn’t allow access from origin ${origin}`;
        return callback(new Error(message), false);
      }
      return callback(null, true);
    },
  }));

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

  const port = process.env.PORT || 8080;

  app.listen(port, () => console.log(`Server running on port ${port}`));
};

init();
