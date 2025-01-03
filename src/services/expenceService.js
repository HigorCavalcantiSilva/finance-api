const BaseService = require('./baseService');
const ExpenceRepository = require('../repositories/ExpenceRepository');

class ExpenceService extends BaseService {
    constructor() {
      super(ExpenceRepository);
    }
}

module.exports = new ExpenceService();