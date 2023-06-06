const { nanoid } = require('nanoid');
const bcrypt = require('bcrypt');
const { User } = require('../../../models');
const NotFoundError = require('../../exceptions/NotFoundError');
const AuthenticationError = require('../../exceptions/AuthenticationError');

class UsersService {
  async addUser(newUser) {
    const { name, email, password } = newUser;
    const id = `user-${nanoid(16)}`;
    const hashedPassword = await bcrypt.hash(password, 10);
    const addedUser = await User.create({
      id, name, email, password: hashedPassword,
    });

    return {
      id: addedUser.id,
      name: addedUser.name,
      email: addedUser.email,
      createdAt: addedUser.createdAt,
    };
  }

  async getUser(id) {
    const retrievedUser = await User.findOne({
      where: { id },
      attributes: ['id', 'name', 'username', 'email', 'phoneNumber', 'address', 'gender', 'photo'],
    });

    if (!retrievedUser) {
      throw new NotFoundError(`user with id ${id} not found`);
    }

    return retrievedUser;
  }

  async verifyUserCredential(email, password) {
    const retrievedUser = await User.findOne({
      where: { email },
      attributes: ['id', 'password'],
    });

    if (!retrievedUser) {
      throw new AuthenticationError('credential you entered are wrong');
    }

    const isMatch = await bcrypt.compare(password, retrievedUser.password);

    if (!isMatch) {
      throw new AuthenticationError('credential you entered are wrong');
    }

    return retrievedUser.id;
  }
}

module.exports = UsersService;
