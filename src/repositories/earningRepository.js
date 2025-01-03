const BaseRepository = require('./baseRepository');

class EarningRepository extends BaseRepository {
    constructor() {
        super('earning')
    }
}

module.exports = new EarningRepository();