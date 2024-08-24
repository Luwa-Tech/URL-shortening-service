const { body, param, validationResult } = require('express-validator');

const validations = [
    body("orgurl").isURL().withMessage('URl is not valid')
];

const validate = (validations) => {
    return async (req, res, next) => {
        for (let validation of validations) {
            const result = await validation.run(req);
            if (!result.isEmpty()) {
                return res.status(400).json({ errors: result.array() });
            }
        }

        next();
    };
};

module.exports = {
    validations,
    validate
};