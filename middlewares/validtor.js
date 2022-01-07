const { body, validationResult } = require('express-validator');

const userValidationRules = () => {
    return [
        body('name').notEmpty().withMessage('اسم المستخدم مطلوب'),
        body('email').notEmpty().withMessage('البريد الإلكتروني مطلوب'),
        body('password').notEmpty().withMessage('كلمة المرور مطلوبة'),
        body('password').isLength({ min: 5 }).withMessage('كلمة المرور يجب أن تكون أكثر من خمسة محارف'),
    ]
}


const validate = (req, res, next) => {
    const errors = validationResult(req)

    if(errors.isEmpty()) {
        return next()
    }

    return res.status(400).json({errors: errors.array()})
}

module.exports = {
    userValidationRules,
    validate
}