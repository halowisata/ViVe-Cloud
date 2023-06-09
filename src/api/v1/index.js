const express = require('express');

const userRoutes = require('./users/routes');
const authenticationRoutes = require('./authentications/routes');
const moodRoutes = require('./moods/routes');
const surveyRoutes = require('./surveys/routes');
const touristAttractionRoutes = require('./tourist_attractions/routes');

const router = express.Router();

router.use('/users', userRoutes);
router.use('/authentications', authenticationRoutes);
router.use('/moods', moodRoutes);
router.use('/surveys', surveyRoutes);
router.use('/tourist-attractions', touristAttractionRoutes);

module.exports = router;
