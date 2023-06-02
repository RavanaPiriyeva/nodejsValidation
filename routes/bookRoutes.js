const express = require('express');
const { bookController } = require('../controllers/bookController');

const bookRoutes = express.Router();

const { body } = require('express-validator');
const { validate } = require('../middleware/Validation');

bookRoutes.get('/', bookController.getAll)
bookRoutes.get('/:id', bookController.getById)
bookRoutes.post(  
    '/',
body('name').notEmpty().withMessage('Name alanı boş geçilemez!'),
validate,
bookController.add)
bookRoutes.delete('/:id', bookController.deleteById)
bookRoutes.put('/:id', bookController.update)


module.exports = {
    bookRoutes
}