const UserService = require('../services/userService');
const BaseController = require('./baseController');

class UserController extends BaseController{
  constructor() {
    super(UserService)
  }
}

module.exports = new UserController();