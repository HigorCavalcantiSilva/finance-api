const express = require('express');
const router = express.Router();

const UserController = require('../controllers/userController');

router.get('/login', UserController.login);
router.get('/', UserController.getAll);
router.post('/', UserController.create);
router.get('/:id', UserController.getById);
router.put('/:id', UserController.update);
router.delete('/:id', UserController.delete);

module.exports = router;