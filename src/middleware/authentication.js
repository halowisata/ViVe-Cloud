const Jwt = require('jsonwebtoken');
const AuthenticationError = require('../exceptions/AuthenticationError');

const authentications = (req, res, next) => {
  const bearerToken = req.headers.authorization;

  if (!bearerToken) {
    throw new AuthenticationError('sign in to proceed');
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

module.exports = authentications;
