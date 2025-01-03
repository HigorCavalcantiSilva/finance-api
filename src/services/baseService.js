class BaseService {
    constructor(repository) {
        this.repository = repository;
    }

    async create(data) {
        return await this.repository.create(data);
    }

    async getAll() {
        return await this.repository.findAll();
    }

    async getById(id) {
        return await this.repository.findById(parseInt(id));
    }

    async update(id, data) {
        return await this.repository.update(parseInt(id), data);
    }

    async delete(id) {
        return await this.repository.delete(parseInt(id));
    }
}

module.exports = BaseService;