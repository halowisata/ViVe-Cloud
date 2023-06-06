const Jwt = require('jsonwebtoken');
const AuthorizationError = require('../exceptions/AuthorizationError');
const AuthenticationError = require('../exceptions/AuthenticationError');

const verifyToken = (req, res, next) => {
  const bearerToken = req.headers.authorization;

  if (!bearerToken) {
    throw new AuthorizationError('login to proceed');
  }

  try {
    const token = bearerToken.substring(7, bearerToken.length);
    const payload = Jwt.verify(token, process.env.ACCESS_TOKEN_KEY);

    req.user = payload;

    return next();
  } catch (error) {
    throw new AuthenticationError('sign in to proceed');
  }
};

module.exports = verifyToken;
