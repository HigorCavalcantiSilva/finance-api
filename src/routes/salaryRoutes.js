const express = require('express');
const router = express.Router();

const authenticateToken = require('../utils/authenticateToken');
const SalaryController = require('../controllers/salaryController');

// Rotas protegidas
router.use(authenticateToken);

router.get('/', SalaryController.getAll);
router.get('/:id', SalaryController.getById);
router.post('/', SalaryController.create);
router.put('/:id', SalaryController.update);
router.delete('/:id', SalaryController.delete);

module.exports = router;