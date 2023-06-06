class AuthenticationsHandler {
  constructor(authenticationsService, usersService, tokenManager, validator) {
    this._authenticationsService = authenticationsService;
    this._usersService = usersService;
    this._tokenManager = tokenManager;
    this._validator = validator;

    this.postAuthenticationHandler = this.postAuthenticationHandler.bind(this);
  }

  async postAuthenticationHandler(req, res) {
    try {
      await this._validator.validatePostAuthenticationPayload(req.body);

      const { email, password } = req.body;

      const id = await this._usersService.verifyUserCredential(email, password);
      const accessToken = this._tokenManager.generateAccessToken({ id });
      const refreshToken = this._tokenManager.generateRefreshToken({ id });

      await this._authenticationsService.addRefreshToken(refreshToken);

      return res.status(201).json({
        status: 'success',
        message: 'logged in successfully',
        data: {
          accessToken,
          refreshToken,
        },
      });
    } catch (error) {
      return res.status(400).json({
        status: 'fail',
        message: error.message,
      });
    }
  }
}

module.exports = AuthenticationsHandler;
