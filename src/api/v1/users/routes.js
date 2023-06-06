const express = require('express');
const UsersHandler = require('./handler');
const UsersService = require('../../../services/sequelize/UsersService');
const validator = require('../../../validator/users');

const service = new UsersService();
const handler = new UsersHandler(service, validator);
const router = express.Router();

router.post('/', handler.postUserHandler);
router.get('/:id', handler.getUserHandler);

module.exports = router;
