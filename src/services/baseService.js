class BaseService {
    constructor(repository) {
        this.repository = repository;
    }

    async createUser(data) {
        return await this.repository.create(data);
    }

    async getAllUsers() {
        return await this.repository.findAll();
    }

    async getUserById(id) {
        return await this.repository.findById(id);
    }

    async updateUser(id, data) {
        return await this.repository.update(id, data);
    }

    async deleteUser(id) {
        return await this.repository.delete(id);
    }
}

module.exports = new UserService();