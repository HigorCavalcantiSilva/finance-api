const SalaryService = require('../services/salaryService');
const BindMethods = require('../utils/bind');

class SalaryController {
  constructor() {
    this.service = SalaryService;
    BindMethods(this);
  }

  async create(req, res) {
    try {
      const salary = await this.service.create(req.body);
      res.status(201).json(salary);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getAll(req, res) {
    try {
      const salaries = await this.service.getAll();
      res.status(200).json(salaries);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getById(req, res) {
    try {
      const salary = await this.service.getById(req.params.id);
      if (salary) {
        res.status(200).json(salary);
      } else {
        res.status(404).json({ error: 'not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async update(req, res) {
    try {
      const salary = await this.service.update(req.params.id, req.body);
      res.status(200).json(salary);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async delete(req, res) {
    try {
      const success = await this.service.delete(req.params.id);
      if (success) {
        res.status(204).send();
      } else {
        res.status(404).json({ error: 'not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new SalaryController();