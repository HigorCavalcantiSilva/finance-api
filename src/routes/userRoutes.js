const express = require('express');
const router = express.Router();

const authenticateToken = require('../utils/authenticateToken');
const UserController = require('../controllers/userController');

// Rotas públicas
router.post('/login', UserController.login);
router.post('/validate-token', UserController.validateToken);
router.post('/', UserController.create);

// Rotas protegidas
router.use(authenticateToken);

router.get('/', UserController.getAll);
router.get('/:id', UserController.getById);
router.put('/:id', UserController.update);
router.delete('/:id', UserController.delete);

module.exports = router;