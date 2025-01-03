const express = require('express');
const router = express.Router();

const authenticateToken = require('../utils/authenticateToken');
const UserController = require('../controllers/userController');

// Rotas públicas
router.get('/login', UserController.login);

// Rotas protegidas
router.use(authenticateToken);

router.get('/', UserController.getAll);
router.post('/', UserController.create);
router.get('/:id', UserController.getById);
router.put('/:id', UserController.update);
router.delete('/:id', UserController.delete);

module.exports = router;