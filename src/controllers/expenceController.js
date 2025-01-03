const ExpenceService = require('../services/expenceService');
const BindMethods = require('../utils/bind');

class ExpenceController {
  constructor() {
    this.service = ExpenceService;
    BindMethods(this);
  }

  async create(req, res) {
    try {
      const expence = await this.service.create(req.body);
      res.status(201).json(expence);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getAll(req, res) {
    try {
      const expences = await this.service.getAll();
      res.status(200).json(expences);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getById(req, res) {
    try {
      const expence = await this.service.getById(req.params.id);
      if (expence) {
        res.status(200).json(expence);
      } else {
        res.status(404).json({ error: 'not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async update(req, res) {
    try {
      const expence = await this.service.update(req.params.id, req.body);
      res.status(200).json(expence);
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

module.exports = new ExpenceController();