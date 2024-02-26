const jobService = require("../services/jobService");

const createJob = async (req, res, next) => {
     try {
          const request = {
               title: req.body.title,
               description: req.body.description,
               location: req.body.location,
               salary: req.body.salary,
               requirement: req.body.requirement,
               responsbility: req.body.responsbility,
               benefit: req.body.benefit,
               employerId: req.user.id,
          };

          const response = await jobService.createJob(request);

          res.status(201).json({
               message: "Job created successfully!",
               success: true,
               data: response,
          });
     } catch (error) {
          next(error);
     }
};

const findJob = async (req, res, next) => {
     try {
          const response = await jobService.findJob();

          res.status(200).json({
               message: "Jobs found successfully!",
               success: true,
               data: response,
          });
     } catch (error) {
          next(error);
     }
};

const findJobById = async (req, res, next) => {
     try {
          const request = {
               id: req.params.jobId,
          };

          const response = await jobService.findJobById(request);

          res.status(200).json({
               message: "Job found successfully!",
               success: true,
               data: response,
          });
     } catch (error) {
          next(error);
     }
};

const updateJob = async (req, res, next) => {
     try {
          const request = {
               id: req.params.jobId,
               title: req.body.title,
               description: req.body.description,
               location: req.body.location,
               salary: req.body.salary,
               requirement: req.body.requirement,
               responsbility: req.body.responsbility,
               benefit: req.body.benefit,
               employerId: req.user.id,
          };

          const response = await jobService.updateJob(request);

          res.status(200).json({
               message: "Job updated successfully!",
               success: true,
               data: response,
          });
     } catch (error) {
          next(error);
     }
};

const deleteJob = async (req, res, next) => {
     try {
          const request = {
               id: req.params.jobId,
          };

          const response = await jobService.deleteJob(request);

          res.status(200).json({
               message: "Job deleted successfully!",
               success: true,
               data: response,
          });
     } catch (error) {
          next(error);
     }
};

module.exports = {
     createJob,
     findJob,
     findJobById,
     updateJob,
     deleteJob,
};
