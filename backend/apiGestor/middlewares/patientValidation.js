const { body, validationResult } = require('express-validator');

const validatePatientFields = [
  body('name').notEmpty().withMessage('Name is required'),
  body('lastName').notEmpty().withMessage('Last name is required'),
  body('dni').notEmpty().withMessage('DNI is required'),
  body('genre').notEmpty().withMessage('Genre is required'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }
    return res.status(400).json({ errors: errors.array() });
  },
];

module.exports = { validatePatientFields };
