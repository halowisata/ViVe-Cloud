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
      await this._service.verifyAvailableEmail(req.body.email);

      const addedUser = await this._service.addUser(req.body);

      return res.status(201).json({
        error: false,
        message: 'user created',
        data: addedUser,
      });
    } catch (error) {
      return res.status(400).json({
        error: true,
        message: error.message,
      });
    }
  }

  async getUserHandler(req, res) {
    try {
      const retrievedUser = await this._service.getUser(req.user.id);

      return res.status(200).json({
        error: false,
        message: 'user retrieved',
        data: retrievedUser,
      });
    } catch (error) {
      return res.status(400).json({
        error: true,
        message: error.message,
      });
    }
  }
}

module.exports = UsersHandler;
