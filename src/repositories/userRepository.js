const BaseRepository = require('./baseRepository');

class UserRepository extends BaseRepository {
    constructor() {
        super('user')
    }
}

module.exports = new UserRepository();