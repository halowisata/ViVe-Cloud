const express = require('express');
const UserTouristAttractionsHandler = require('./handler');
const UserTouristAttractionsService = require('../../../services/sequelize/UserTouristAttractionsService');
const validator = require('../../../validator/user_tourist_attractions');
const authentication = require('../../../middlewares/authentication');

const service = new UserTouristAttractionsService();
const handler = new UserTouristAttractionsHandler(service, validator);
const router = express.Router();

router.post('/', authentication, handler.postUserTouristAttractionHandler);

module.exports = router;
