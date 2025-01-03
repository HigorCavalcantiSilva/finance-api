const savingService = require('../services/savingService');
const BindMethods = require('../utils/bind');

class savingController {
  constructor() {
    this.service = savingService;
    BindMethods(this);
  }

  async create(req, res) {
    try {
      const saving = await this.service.create(req.body);
      res.status(201).json(saving);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getAll(req, res) {
    try {
      const savings = await this.service.getAll();
      res.status(200).json(savings);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getById(req, res) {
    try {
      const saving = await this.service.getById(req.params.id);
      if (saving) {
        res.status(200).json(saving);
      } else {
        res.status(404).json({ error: 'not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async update(req, res) {
    try {
      const saving = await this.service.update(req.params.id, req.body);
      res.status(200).json(saving);
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

module.exports = new savingController();