const BaseRepository = require('./baseRepository');

class SalaryRepository extends BaseRepository {
    constructor() {
        super('salary')
    }
}

module.exports = new SalaryRepository();