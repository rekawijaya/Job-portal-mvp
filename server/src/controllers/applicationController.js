const applicationService = require("../services/applicationService");

const createApplication = async (req, res, next) => {
     try {
          const request = {
               jobId: req.body.jobId,
               userId: req.user.id,
               status: "pending",
               proccess: "pending",
          };

          const response = await applicationService.createApplication(
               request
          );

          res.status(201).json({
               message: "Application created successfully!",
               success: true,
               data: response,
          });
     } catch (error) {
          next(error);
     }
};

const findApplication = async (req, res, next) => {
     try {
          const response = await applicationService.findApplication();

          res.status(200).json({
               message: "Applications found successfully!",
               success: true,
               data: response,
          });
     } catch (error) {
          next(error);
     }
};

module.exports = {
     createApplication,
     findApplication,
};
