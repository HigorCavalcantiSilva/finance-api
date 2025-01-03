const express = require('express');
const router = express.Router();

const authenticateToken = require('../utils/authenticateToken');
const ExpenceController = require('../controllers/expenceController');

// Rotas protegidas
router.use(authenticateToken);

router.get('/', ExpenceController.getAll);
router.get('/:id', ExpenceController.getById);
router.post('/', ExpenceController.create);
router.put('/:id', ExpenceController.update);
router.delete('/:id', ExpenceController.delete);

module.exports = router;