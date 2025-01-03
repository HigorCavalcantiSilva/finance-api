const BaseService = require('./baseService');
const EarningRepository = require('../repositories/earningRepository');

class EarningService extends BaseService {
    constructor() {
      super(EarningRepository);
    }
}

module.exports = new EarningService();