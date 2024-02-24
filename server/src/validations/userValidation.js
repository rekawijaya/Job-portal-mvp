const joi = require("joi");

const register = joi.object({
     firstName: joi.string().required(),
     lastName: joi.string().required(),
     email: joi.string().email().required(),
     password: joi.string().required(),
});

const login = joi.object({
     email: joi.string().email().required(),
     password: joi.string().required(),
});

module.exports = { register, login };
