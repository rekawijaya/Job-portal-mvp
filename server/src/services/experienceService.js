const experienceRepository = require("../repositories/experienceRepository");
const ResponseError = require("../utilities/responseError");
const validation = require("../utilities/validation");
const experienceValidation = require("../validations/experienceValidation");

const createExperience = async (request) => {
     const validData = validation(
          request,
          experienceValidation.createExperience
     );

     const result = await experienceRepository.createExperience(validData);

     const response = {
          id: result.id,
          company: result.company,
          position: result.position,
          startDate: result.startDate,
          endDate: result.endDate,
     };

     return response;
};

const findExperience = async (request) => {
     const validData = validation(
          request,
          experienceValidation.findExperience
     );

     const experience = await experienceRepository.findExperience(
          validData
     );
     if (experience.length === 0) {
          throw new ResponseError(404, "Experience not found!");
     }

     const response = experience.map((item) => {
          return {
               id: item.id,
               company: item.company,
               position: item.position,
               startDate: item.startDate,
               endDate: item.endDate,
          };
     });

     return response;
};

const findExperienceById = async (request) => {
     const validData = validation(
          request,
          experienceValidation.findExperienceById
     );

     const experience = await experienceRepository.findExperience({
          _id: validData.id,
     });
     if (experience.length === 0) {
          throw new ResponseError(404, "Experience not found!");
     }

     const result = await experienceRepository.findExperienceById({
          _id: validData.id,
     });

     const response = {
          id: result.id,
          company: result.company,
          position: result.position,
          startDate: result.startDate,
          endDate: result.endDate,
     };

     return response;
};

const updateExperience = async (request) => {
     const validData = validation(
          request,
          experienceValidation.updateExperience
     );

     const experience = await experienceRepository.findExperience({
          _id: validData.id,
     });
     if (experience.length === 0) {
          throw new ResponseError(404, "Experience not found!");
     }

     const updateData = {
          company: validData.company,
          position: validData.position,
          startDate: validData.startDate,
          endDate: validData.endDate,
     };

     const result = await experienceRepository.updateExperience(
          { _id: validData.id },
          updateData
     );

     const response = {
          id: result.id,
          company: result.company,
          position: result.position,
          startDate: result.startDate,
          endDate: result.endDate,
     };

     return response;
};

const deleteExperience = async (request) => {
     const validData = validation(
          request,
          experienceValidation.deleteExperience
     );

     const experience = await experienceRepository.findExperience({
          _id: validData.id,
     });
     if (experience.length === 0) {
          throw new ResponseError(404, "Experience not found!");
     }

     const result = await experienceRepository.deleteExperience({
          _id: validData.id,
     });

     const response = {
          id: result.id,
          company: result.company,
          position: result.position,
          startDate: result.startDate,
          endDate: result.endDate,
     };

     return response;
};

module.exports = {
     createExperience,
     findExperience,
     findExperienceById,
     updateExperience,
     deleteExperience,
};
