const express = require('express');
const UsersHandler = require('./handler');
const UsersService = require('../../../services/mysql/UsersService');

const usersService = new UsersService();
const usersHandler = new UsersHandler(usersService);
const router = express.Router();

router.post('/', usersHandler.getUserHandler);
router.get('/', usersHandler.getUserHandler);

module.exports = router;
