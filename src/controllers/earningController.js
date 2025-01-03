const EarningService = require('../services/earningService');
const BindMethods = require('../utils/bind');

class EarningController {
  constructor() {
    this.service = EarningService;
    BindMethods(this);
  }

  async create(req, res) {
    try {
      const earning = await this.service.create(req.body);
      res.status(201).json(earning);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getAll(req, res) {
    try {
      const earnings = await this.service.getAll();
      res.status(200).json(earnings);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getById(req, res) {
    try {
      const earning = await this.service.getById(req.params.id);
      if (earning) {
        res.status(200).json(earning);
      } else {
        res.status(404).json({ error: 'not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async update(req, res) {
    try {
      const earning = await this.service.update(req.params.id, req.body);
      res.status(200).json(earning);
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

module.exports = new EarningController();