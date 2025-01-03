const BaseService = require('./baseService');
const SavingRepository = require('../repositories/savingRepository');

class SavingService extends BaseService {
    constructor() {
      super(SavingRepository);
    }
}

module.exports = new SavingService();