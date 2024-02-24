const joi = require("joi");

const register = joi.object({
     email: joi.string().required(),
     password: joi.string().required(),
     companyName: joi.string().required(),
     companyDescription: joi.string().required(),
     address: joi.string().required(),
     noHp: joi.string().required(),
});

const login = joi.object({
     email: joi.string().required(),
     password: joi.string().required(),
});

module.exports = {
     register,
     login,
};
