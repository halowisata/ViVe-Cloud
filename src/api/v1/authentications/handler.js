class AuthenticationsHandler {
  constructor(authenticationsService, usersService, tokenManager, validator) {
    this._authenticationsService = authenticationsService;
    this._usersService = usersService;
    this._tokenManager = tokenManager;
    this._validator = validator;

    this.postAuthenticationHandler = this.postAuthenticationHandler.bind(this);
    this.putAuthenticationHandler = this.putAuthenticationHandler.bind(this);
    this.deleteAuthenticationHandler = this.deleteAuthenticationHandler.bind(this);
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
        error: false,
        message: 'sign in success',
        data: {
          accessToken,
          refreshToken,
        },
      });
    } catch (error) {
      return res.status(400).json({
        error: true,
        message: error.message,
      });
    }
  }

  async putAuthenticationHandler(req, res) {
    try {
      await this._validator.validatePutAuthenticationPayload(req.body);

      const { refreshToken } = req.body;

      await this._authenticationsService.verifyRefreshToken(refreshToken);

      const { id } = this._tokenManager.verifyRefreshToken(refreshToken);
      const accessToken = this._tokenManager.generateAccessToken({ id });

      return res.json({
        error: false,
        data: {
          accessToken,
        },
      });
    } catch (error) {
      return res.status(400).json({
        error: true,
        message: error.message,
      });
    }
  }

  async deleteAuthenticationHandler(req, res) {
    try {
      await this._validator.validateDeleteAuthenticationPayload(req.body);

      const { refreshToken } = req.body;

      await this._authenticationsService.verifyRefreshToken(refreshToken);
      await this._authenticationsService.deleteRefreshToken(refreshToken);

      return res.json({
        error: false,
        message: 'logged out successfully',
      });
    } catch (error) {
      return res.status(400).json({
        error: true,
        message: error.message,
      });
    }
  }
}

module.exports = AuthenticationsHandler;
