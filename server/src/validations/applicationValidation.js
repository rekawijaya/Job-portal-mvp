const joi = require("joi");

const createApplication = joi.object({
     jobId: joi.string().required(),
     userId: joi.string().required(),
     status: joi.string().required(),
     proccess: joi.string().required(),
});

module.exports = { createApplication };
