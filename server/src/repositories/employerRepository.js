const Employers = require("../models/employerModel");

const findEmployer = async (request) => {
     const employer = await Employers.find(request);
     return employer;
};

const createEmployer = async (request) => {
     const employer = await Employers.create(request);
     return employer;
};

const findEmployerById = async (request) => {
     const employer = await Employers.findById(request);
     return employer;
};

module.exports = {
     findEmployer,
     createEmployer,
     findEmployerById,
};
