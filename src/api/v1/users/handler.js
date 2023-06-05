class UsersHandler {
  constructor(service) {
    this._service = service;

    this.postUserHandler = this.postUserHandler.bind(this);
    this.getUserHandler = this.getUserHandler.bind(this);
  }

  async postUserHandler(req, res) {
    this._service.addUser();
    res.send('Post User Handler');
  }

  async getUserHandler(req, res) {
    this._service.getUser();
    res.send('Get User Handler');
  }
}

module.exports = UsersHandler;
