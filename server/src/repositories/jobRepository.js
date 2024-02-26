const Jobs = require("../models/jobModel");

const createJob = async (request) => {
     const job = await Jobs.create(request);
     return job;
};

const findJob = async () => {
     const job = await Jobs.find();
     return job;
};

const findJobById = async (request) => {
     const job = await Jobs.findById(request);
     return job;
};

const updateJob = async (id, data) => {
     const job = await Jobs.findByIdAndUpdate(id, data, {
          new: true,
     });
     return job;
};

const deleteJob = async (id) => {
     const job = await Jobs.findByIdAndDelete(id);
     return job;
};

module.exports = {
     createJob,
     findJob,
     findJobById,
     updateJob,
     deleteJob,
};
