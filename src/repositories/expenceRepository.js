const BaseRepository = require('./baseRepository');

class ExpenceRepository extends BaseRepository {
    constructor() {
        super('expence')
    }
}

module.exports = new ExpenceRepository();