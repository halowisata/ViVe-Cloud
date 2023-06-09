class MoodsHandler {
  constructor(service) {
    this._service = service;

    this.getMoodsHandler = this.getMoodsHandler.bind(this);
  }

  async getMoodsHandler(req, res) {
    const retrievedMoods = await this._service.getMoods();

    return res.status(200).json({
      error: false,
      message: 'moods retrieved',
      data: retrievedMoods,
    });
  }
}

module.exports = MoodsHandler;
