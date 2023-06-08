const express = require('express');
const AuthenticationsHandler = require('./handler');
const AuthenticationsService = require('../../../services/sequelize/AuthenticationsService');
const UsersService = require('../../../services/sequelize/UsersService');
const tokenManager = require('../../../tokenize/tokenManager');
const validator = require('../../../validator/authentications');

const authenticationsService = new AuthenticationsService();
const usersService = new UsersService();
const handler = new AuthenticationsHandler(
  authenticationsService,
  usersService,
  tokenManager,
  validator,
);
const router = express.Router();

router.post('/', handler.postAuthenticationHandler);
router.put('/', handler.putAuthenticationHandler);
router.delete('/', handler.deleteAuthenticationHandler);

module.exports = router;
