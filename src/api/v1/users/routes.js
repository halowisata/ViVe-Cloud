const express = require('express');
const UsersHandler = require('./handler');
const UsersService = require('../../../services/sequelize/UsersService');
const validator = require('../../../validator/users');
const authentication = require('../../../middlewares/authentication');

const service = new UsersService();
const handler = new UsersHandler(service, validator);
const router = express.Router();

router.post('/', handler.postUserHandler);
router.get('/', authentication, handler.getUserHandler);

module.exports = router;
