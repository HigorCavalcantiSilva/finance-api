const BaseRepository = require('./baseRepository');

class SavingRepository extends BaseRepository {
    constructor() {
        super('salary')
    }
}

module.exports = new SavingRepository();