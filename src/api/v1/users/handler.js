class UsersHandler {
  constructor(service, validator) {
    this._service = service;
    this._validator = validator;

    this.postUserHandler = this.postUserHandler.bind(this);
    this.getUserHandler = this.getUserHandler.bind(this);
  }

  async postUserHandler(req, res) {
    try {
      await this._validator.validateUserPayload(req.body);

      const addedUser = await this._service.addUser(req.body);

      return res.status(201).json({
        status: 'success',
        data: addedUser,
      });
    } catch (error) {
      return res.status(400).json({
        status: 'fail',
        message: error.message,
      });
    }
  }

  async getUserHandler(req, res) {
    try {
      const retrievedUser = await this._service.getUser(req.params.id);

      return res.status(200).json({
        status: 'success',
        data: retrievedUser,
      });
    } catch (error) {
      return res.status(400).json({
        status: 'fail',
        message: error.message,
      });
    }
  }
}

module.exports = UsersHandler;
