const { Authentication } = require('../../../models');

class AuthenticationsService {
  async addRefreshToken(token) {
    await Authentication.create({ token });
  }
}

module.exports = AuthenticationsService;
