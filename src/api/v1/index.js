const express = require('express');

const userRoutes = require('./users/routes');
const authenticationRoutes = require('./authentications/routes');
const surveyRoutes = require('./surveys/routes');
const touristAttractionRoutes = require('./tourist_attractions/routes');
const userTouristAttractionRoutes = require('./user_tourist_attractions/routes');

const router = express.Router();

router.use('/users', userRoutes);
router.use('/authentications', authenticationRoutes);
router.use('/surveys', surveyRoutes);
router.use('/tourist-attractions', touristAttractionRoutes);
router.use('/user-tourist-attractions', userTouristAttractionRoutes);

module.exports = router;
