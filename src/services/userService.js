const BaseService = require('./baseService');
const Password = require('../utils/password')
const userRepository = require('../repositories/userRepository');

class UserService extends BaseService {
    constructor() {
      super(userRepository);
    }

    async create(data) {
      // Lógica adicional antes de criar o usuário
      if (!data.email) {
          throw new Error('Email is required to create a user.');
      }

      // Verificar se o email já existe
      const existingUser = await this.model.findUnique({
          where: { email: data.email },
      });

      if (existingUser) {
          throw new Error('A user with this email already exists.');
      }

      // Chamando o método `create` da classe base
      return super.create(data);
    }
}

module.exports = UserService;