const joi = require("joi");

const createInformation = joi.object({
     noHp: joi.string().required(),
     address: joi.string().required(),
     birthday: joi.date().required(),
     userId: joi.string().required(),
});

const findInformation = joi.object({
     userId: joi.string().required(),
});

const updateInformation = joi.object({
     noHp: joi.string().required(),
     address: joi.string().required(),
     birthday: joi.date().required(),
     userId: joi.string().required(),
});

module.exports = { createInformation, findInformation, updateInformation };
