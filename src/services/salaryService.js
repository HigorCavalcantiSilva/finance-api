const BaseService = require('./baseService');
const SalaryRepository = require('../repositories/salaryRepository');

class SalaryService extends BaseService {
    constructor() {
      super(SalaryRepository);
    }
}

module.exports = new SalaryService();