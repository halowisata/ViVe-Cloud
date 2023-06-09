class UserTouristAttractionsHandler {
  constructor(service, validator) {
    this._service = service;
    this._validator = validator;

    this.postUserTouristAttractionHandler = this.postUserTouristAttractionHandler.bind(this);
  }

  async postUserTouristAttractionHandler(req, res) {
    try {
      await this._validator.validateUserTouristAttractionPayload(req.body);

      const addedUserTouristAttraction = await this._service.addUserTouristAttraction(
        req.user.id,
        req.body.touristAttractionId,
      );

      return res.status(201).json({
        error: false,
        message: 'added to bookmark',
        data: addedUserTouristAttraction,
      });
    } catch (error) {
      return res.status(400).json({
        error: true,
        message: error.message,
      });
    }
  }
}

module.exports = UserTouristAttractionsHandler;
