const express = require('express');
const router = express.Router();

const authenticateToken = require('../utils/authenticateToken');
const SavingController = require('../controllers/salaryController');

// Rotas protegidas
router.use(authenticateToken);

router.get('/', SavingController.getAll);
router.get('/:id', SavingController.getById);
router.post('/', SavingController.create);
router.put('/:id', SavingController.update);
router.delete('/:id', SavingController.delete);

module.exports = router;