const express = require('express');
const TouristAttractionsHandler = require('./handler');

const handler = new TouristAttractionsHandler();
const router = express.Router();

router.get('/', handler.getTouristAttractionsHandler);

module.exports = router;
