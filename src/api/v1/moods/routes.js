const express = require('express');
const MoodsHandler = require('./handler');
const MoodsService = require('../../../services/sequelize/MoodsService');

const service = new MoodsService();
const handler = new MoodsHandler(service);
const router = express.Router();

router.get('/', handler.getMoodsHandler);

module.exports = router;
