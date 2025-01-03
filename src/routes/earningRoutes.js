const express = require('express');
const router = express.Router();

const authenticateToken = require('../utils/authenticateToken');
const EarningController = require('../controllers/salaryController');

// Rotas protegidas
router.use(authenticateToken);

router.get('/', EarningController.getAll);
router.get('/:id', EarningController.getById);
router.post('/', EarningController.create);
router.put('/:id', EarningController.update);
router.delete('/:id', EarningController.delete);

module.exports = router;