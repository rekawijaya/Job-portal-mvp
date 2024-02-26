const educationService = require("../services/educationService");

const createEducation = async (req, res, next) => {
     try {
          const request = {
               degree: req.body.degree,
               school: req.body.school,
               startDate: req.body.startDate,
               endDate: req.body.endDate,
               userId: req.user.id,
          };

          const response = await educationService.createEducation(request);

          res.status(201).json({
               message: "Education created successfully!",
               success: true,
               data: response,
          });
     } catch (error) {
          next(error);
     }
};

const findEducation = async (req, res, next) => {
     try {
          const request = {
               userId: req.user.id,
          };

          const response = await educationService.findEducation(request);

          res.status(200).json({
               message: "Education found successfully!",
               success: true,
               data: response,
          });
     } catch (error) {
          next(error);
     }
};

const findEducationById = async (req, res, next) => {
     try {
          const request = {
               id: req.params.educationId,
               userId: req.user.id,
          };

          const response = await educationService.findEducationById(
               request
          );

          res.status(200).json({
               message: "Education found successfully!",
               success: true,
               data: response,
          });
     } catch (error) {
          next(error);
     }
};

const updateEducation = async (req, res, next) => {
     try {
          const request = {
               id: req.params.educationId,
               userId: req.user.id,
               degree: req.body.degree,
               school: req.body.school,
               startDate: req.body.startDate,
               endDate: req.body.endDate,
          };

          const response = await educationService.updateEducation(request);

          res.status(200).json({
               message: "Education updated successfully!",
               success: true,
               data: response,
          });
     } catch (error) {
          next(error);
     }
};

const deleteEducation = async (req, res, next) => {
     try {
          const request = {
               id: req.params.educationId,
               userId: req.user.id,
          };

          const response = await educationService.deleteEducation(request);

          res.status(200).json({
               message: "Education deleted successfully!",
               success: true,
               data: response,
          });
     } catch (error) {
          next(error);
     }
};

module.exports = {
     createEducation,
     findEducation,
     findEducationById,
     updateEducation,
     deleteEducation,
};
