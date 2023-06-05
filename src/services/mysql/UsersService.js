const sequelize = require('../../config/database');

class UsersService {
  constructor() {
    this._sequelize = sequelize;
  }

  async addUser() {
    console.log('Accepted');
  }

  async getUser() {
    console.log('Accepted');
  }
}

module.exports = UsersService;
