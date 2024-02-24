const joi = require("joi");

const createEducation = joi.object({
     degree: joi.string().required(),
     school: joi.string().required(),
     startDate: joi.date().required(),
     endDate: joi.date(),
     userId: joi.string().required(),
});

const findEducation = joi.object({
     userId: joi.string().required(),
});

const findEducationById = joi.object({
     id: joi.string().required(),
     userId: joi.string().required(),
});

const updateEducation = joi.object({
     id: joi.string().required(),
     userId: joi.string().required(),
     degree: joi.string().required(),
     school: joi.string().required(),
     startDate: joi.date().required(),
     endDate: joi.date(),
});

const deleteEducation = joi.object({
     id: joi.string().required(),
     userId: joi.string().required(),
});

module.exports = {
     createEducation,
     findEducation,
     findEducationById,
     updateEducation,
     deleteEducation,
};
