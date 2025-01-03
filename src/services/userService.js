const BaseService = require('./baseService');
const Password = require('../utils/password')
const JWT = require('../utils/jwt')
const UserRepository = require('../repositories/userRepository');

class UserService extends BaseService {
    constructor() {
      super(UserRepository);
    }

    async create(data) {
      // Verificar se o email já existe
      const existingUser = await this.repository.prisma_model.findFirst({
        where: { email: data.email },
      });

      if (existingUser) {
        throw new Error('A user with this email already exists.');
      }

      data.password = await Password.hashPassword(data.password);

      return super.create(data);
    }

    async login(data) {
      const existingUser = await this.repository.prisma_model.findFirst({
        where: { email: data.email },
      });

      if (!existingUser) {
        throw new Error('A user with this email already exists.');
      }

      if(!await Password.verifyPassword(data.password, existingUser.password)) {
        throw new Error('Password incorrect.');
      }

      const token = JWT.createToken({userId: existingUser.id, username: existingUser.userName});

      return { token, id: existingUser.id };
    }
}

module.exports = new UserService();