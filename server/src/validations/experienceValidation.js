const joi = require("joi");

const createExperience = joi.object({
     company: joi.string().required(),
     position: joi.string().required(),
     startDate: joi.date().required(),
     endDate: joi.date(),
     userId: joi.string().required(),
});

const findExperience = joi.object({
     userId: joi.string().required(),
});

const findExperienceById = joi.object({
     id: joi.string().required(),
     userId: joi.string().required(),
});

const updateExperience = joi.object({
     id: joi.string().required(),
     userId: joi.string().required(),
     company: joi.string(),
     position: joi.string(),
     startDate: joi.date(),
     endDate: joi.date(),
});

const deleteExperience = joi.object({
     id: joi.string().required(),
     userId: joi.string().required(),
});

module.exports = {
     createExperience,
     findExperience,
     findExperienceById,
     updateExperience,
     deleteExperience,
};
