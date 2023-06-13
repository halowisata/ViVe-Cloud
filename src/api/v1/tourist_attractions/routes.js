const express = require('express');
const TouristAttractionsHandler = require('./handler');
const authentication = require('../../../middlewares/authentication');

const handler = new TouristAttractionsHandler();
const router = express.Router();

router.get('/', authentication, handler.getTouristAttractionsHandler);

module.exports = router;
