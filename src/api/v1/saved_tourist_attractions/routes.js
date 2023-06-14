const express = require('express');
const SavedTouristAttractionsHandler = require('./handler');
const SavedTouristAttractionsService = require('../../../services/sequelize/SavedTouristAttractionsService');
const validator = require('../../../validator/saved_tourist_attractions');
const authentication = require('../../../middlewares/authentication');

const service = new SavedTouristAttractionsService();
const handler = new SavedTouristAttractionsHandler(service, validator);
const router = express.Router();

router.post('/', authentication, handler.postSavedTouristAttraction);
router.get('/', authentication, handler.getSavedTouristAttractions);
router.delete('/:touristAttractionName', authentication, handler.deleteSavedTouristAttraction);

module.exports = router;
