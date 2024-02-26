const joi = require("joi");

const createJob = joi.object({
     title: joi.string().required(),
     description: joi.string().required(),
     location: joi.string().required(),
     salary: joi.string().required(),
     requirement: joi.string().required(),
     responsbility: joi.string().required(),
     benefit: joi.string().required(),
     employerId: joi.string().required(),
});

const findJobById = joi.object({
     id: joi.string().required(),
});

const updateJob = joi.object({
     id: joi.string().required(),
     title: joi.string().required(),
     description: joi.string().required(),
     location: joi.string().required(),
     salary: joi.string().required(),
     requirement: joi.string().required(),
     responsbility: joi.string().required(),
     benefit: joi.string().required(),
     employerId: joi.string().required(),
});

const deleteJob = joi.object({
     id: joi.string().required(),
});

module.exports = { createJob, findJobById, updateJob, deleteJob };
