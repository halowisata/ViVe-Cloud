const express = require('express');
const SurveysHandler = require('./handler');
const SurveysService = require('../../../services/sequelize/SurveysService');
const validator = require('../../../validator/surveys');
const authentication = require('../../../middlewares/authentication');

const service = new SurveysService();
const handler = new SurveysHandler(service, validator);
const router = express.Router();

router.post('/', authentication, handler.postSurveyHandler);
router.get('/', authentication, handler.getSurveyHandler);

module.exports = router;
