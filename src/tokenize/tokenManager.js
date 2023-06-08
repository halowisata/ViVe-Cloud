const Jwt = require('jsonwebtoken');
const InvariantError = require('../exceptions/InvariantError');

const TokenManager = {
  generateAccessToken: (payload) => Jwt.sign(
    payload,
    process.env.ACCESS_TOKEN_KEY,
    { expiresIn: '30d' },
  ),
  generateRefreshToken: (payload) => Jwt.sign(
    payload,
    process.env.REFRESH_TOKEN_KEY,
    { expiresIn: '365d' },
  ),
  verifyRefreshToken: (refreshToken) => {
    try {
      const payload = Jwt.verify(refreshToken, process.env.REFRESH_TOKEN_KEY);

      return payload;
    } catch (error) {
      throw new InvariantError('invalid refresh token');
    }
  },
};

module.exports = TokenManager;
