const express = require('express');
const { userController } = require('../controllers/userController');

const userRoutes = express.Router();

const { body } = require('express-validator');
const { validate } = require('../middleware/Validation');

userRoutes.get('/', userController.getAll)
userRoutes.get('/:id', userController.getById)
userRoutes.post(  
    '/',
body('name').notEmpty().withMessage('Name alanı boş geçilemez!'),
validate,
userController.add)
userRoutes.delete('/:id', userController.deleteById)
userRoutes.put('/:id', userController.update)


module.exports = {
    userRoutes
}