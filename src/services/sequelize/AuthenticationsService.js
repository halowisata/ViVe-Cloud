const { Authentication } = require('../../../models');
const InvariantError = require('../../exceptions/InvariantError');

class AuthenticationsService {
  async addRefreshToken(token) {
    await Authentication.create({ token });
  }

  async verifyRefreshToken(token) {
    const retrievedToken = await Authentication.findOne({
      where: { token },
      attributes: ['token'],
    });

    if (!retrievedToken) {
      throw new InvariantError('refresh token not found');
    }
  }

  async deleteRefreshToken(token) {
    await Authentication.destroy({ where: { token } });
  }
}

module.exports = AuthenticationsService;
