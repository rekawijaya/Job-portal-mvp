const experienceService = require("../services/experienceService");

const createExperience = async (req, res, next) => {
     try {
          const request = {
               company: req.body.company,
               position: req.body.position,
               startDate: req.body.startDate,
               endDate: req.body.endDate,
               userId: req.user.id,
          };

          const response = await experienceService.createExperience(
               request
          );

          res.status(201).json({
               message: "Experience created successfully!",
               success: true,
               data: response,
          });
     } catch (error) {
          next(error);
     }
};

const findExperience = async (req, res, next) => {
     try {
          const request = {
               userId: req.user.id,
          };

          const response = await experienceService.findExperience(request);

          res.status(200).json({
               message: "Experience found successfully!",
               success: true,
               data: response,
          });
     } catch (error) {
          next(error);
     }
};

const findExperienceById = async (req, res, next) => {
     try {
          const request = {
               id: req.params.experienceId,
               userId: req.user.id,
          };

          const response = await experienceService.findExperienceById(
               request
          );

          res.status(200).json({
               message: "Experience found successfully!",
               success: true,
               data: response,
          });
     } catch (error) {
          next(error);
     }
};

const updateExperience = async (req, res, next) => {
     try {
          const request = {
               id: req.params.experienceId,
               userId: req.user.id,
               company: req.body.company,
               position: req.body.position,
               startDate: req.body.startDate,
               endDate: req.body.endDate,
          };

          const response = await experienceService.updateExperience(
               request
          );

          res.status(200).json({
               message: "Experience updated successfully!",
               success: true,
               data: response,
          });
     } catch (error) {
          next(error);
     }
};

const deleteExperience = async (req, res, next) => {
     try {
          const request = {
               id: req.params.experienceId,
               userId: req.user.id,
          };

          const response = await experienceService.deleteExperience(
               request
          );

          res.status(200).json({
               message: "Experience deleted successfully!",
               success: true,
               data: response,
          });
     } catch (error) {
          next(error);
     }
};

module.exports = {
     createExperience,
     findExperience,
     findExperienceById,
     updateExperience,
     deleteExperience,
};
