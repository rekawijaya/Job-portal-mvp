const jobRepository = require("../repositories/jobRepository");
const ResponseError = require("../utilities/responseError");
const validation = require("../utilities/validation");
const jobValidation = require("../validations/jobValidation");

const createJob = async (request) => {
     const validData = validation(request, jobValidation.createJob);

     const result = await jobRepository.createJob(validData);

     const response = {
          id: result.id,
          title: result.title,
          description: result.description,
          location: result.location,
          salary: result.salary,
          requirement: result.requirement,
          responsbility: result.responsbility,
          benefit: result.benefit,
     };

     return response;
};

const findJob = async () => {
     const result = await jobRepository.findJob();

     const response = result.map((item) => {
          return {
               id: item.id,
               title: item.title,
               description: item.description,
               location: item.location,
               salary: item.salary,
               requirement: item.requirement,
               responsbility: item.responsbility,
               benefit: item.benefit,
          };
     });

     return response;
};

const findJobById = async (request) => {
     const validData = validation(request, jobValidation.findJobById);

     const result = await jobRepository.findJobById(validData.id);
     if (result.length === 0) {
          throw new ResponseError(404, "Job not found!");
     }

     const response = {
          id: result.id,
          title: result.title,
          description: result.description,
          location: result.location,
          salary: result.salary,
          requirement: result.requirement,
          responsbility: result.responsbility,
          benefit: result.benefit,
     };

     return response;
};

const updateJob = async (request) => {
     const validData = validation(request, jobValidation.updateJob);

     const job = await jobRepository.findJobById(validData.id);
     if (job.length === 0) {
          throw new ResponseError(404, "Job not found!");
     }

     const updateData = {
          title: validData.title,
          description: validData.description,
          location: validData.location,
          salary: validData.salary,
          requirement: validData.requirement,
          responsbility: validData.responsbility,
          benefit: validData.benefit,
     };

     const result = await jobRepository.updateJob(
          validData.id,
          updateData
     );

     const response = {
          id: result.id,
          title: result.title,
          description: result.description,
          location: result.location,
          salary: result.salary,
          requirement: result.requirement,
          responsbility: result.responsbility,
          benefit: result.benefit,
     };

     return response;
};

const deleteJob = async (request) => {
     const validData = validation(request, jobValidation.deleteJob);

     const job = await jobRepository.findJobById(validData.id);
     if (job.length === 0) {
          throw new ResponseError(404, "Job not found!");
     }

     const result = await jobRepository.deleteJob(validData.id);

     const response = {
          id: result.id,
          title: result.title,
          description: result.description,
          location: result.location,
          salary: result.salary,
          requirement: result.requirement,
          responsbility: result.responsbility,
          benefit: result.benefit,
     };

     return response;
};

module.exports = {
     createJob,
     findJob,
     findJobById,
     updateJob,
     deleteJob,
};
