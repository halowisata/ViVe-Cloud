class SavedTouristAttractionsHandler {
  constructor(service, validator) {
    this._service = service;
    this._validator = validator;

    this.postSavedTouristAttraction = this.postSavedTouristAttraction.bind(this);
    this.getSavedTouristAttractions = this.getSavedTouristAttractions.bind(this);
  }

  async postSavedTouristAttraction(req, res) {
    try {
      await this._validator.validateSavedTouristAttractionPayload(req.body);

      const addedSavedTouristAttraction = await this._service.addSavedTouristAttraction(
        req.user.id,
        req.body,
      );

      return res.status(201).json({
        error: false,
        message: 'tourist attraction saved',
        data: addedSavedTouristAttraction,
      });
    } catch (error) {
      return res.status(400).json({
        error: true,
        message: error.message,
      });
    }
  }

  async getSavedTouristAttractions(req, res) {
    try {
      const retrievedTouristAttractions = await this._service.getSavedTouristAttractions(
        req.user.id,
      );

      return res.status(200).json({
        error: false,
        message: 'saved tourist attractions retrieved',
        data: retrievedTouristAttractions,
      });
    } catch (error) {
      return res.status(400).json({
        error: true,
        message: error.message,
      });
    }
  }
}

module.exports = SavedTouristAttractionsHandler;
