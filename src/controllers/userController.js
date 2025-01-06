const UserService = require('../services/userService');
const BindMethods = require('../utils/bind');

class UserController {
  constructor() {
    this.service = UserService;
    BindMethods(this);
  }

  async create(req, res) {
    try {
      const user = await this.service.create(req.body);
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getAll(req, res) {
    try {
      const users = await this.service.getAll();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getById(req, res) {
    try {
      const user = await this.service.getById(req.params.id);
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ error: 'not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async update(req, res) {
    try {
      const user = await this.service.update(req.params.id, req.body);
      res.status(200).json(user);
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

  async login(req, res) {
    try {
      const token = await this.service.login(req.body);
      if (token) {
        res.status(200).json(token);
      } else {
        res.status(404).json({ error: 'email or password incorrect' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  validateToken(req, res) {
    try {
      const token = this.service.validateToken(req.body);
      if (token) {
        res.status(200).json(true);
      } else {
        res.status(401).json(false);
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new UserController();