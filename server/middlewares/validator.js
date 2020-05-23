const { check, validationResult } = require('express-validator');

exports.registerRules = () => [
  check('email', 'this field is required').notEmpty(),
  check('email', 'this field should be a valid email !').isEmail(),
  check('password', 'this field require a 6 char length').isLength({ min: 6 })
];

exports.validator = (req, res, next) => {
  const errors = validationResult(req); //req.body

  errors.isEmpty() ? next() : res.status(400).json({ errors: errors.array() });
};