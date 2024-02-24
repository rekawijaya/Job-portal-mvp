const educationRepository = require("../repositories/educationRepository");
const validation = require("../utilities/validation");
const educationValidation = require("../validations/educationValidation");
const ResponseError = require("../utilities/responseError");

const createEducation = async (request) => {
     const validData = validation(
          request,
          educationValidation.createEducation
     );

     const result = await educationRepository.createEducation(validData);

     const response = {
          id: result.id,
          degree: result.degree,
          school: result.school,
          startDate: result.startDate,
          endDate: result.endDate,
     };

     return response;
};

const findEducation = async (request) => {
     const validData = validation(
          request,
          educationValidation.findEducation
     );

     const education = await educationRepository.findEducation(validData);
     if (education.length === 0) {
          throw new ResponseError(404, "Education not found!");
     }
     const response = education.map((item) => {
          return {
               id: item.id,
               degree: item.degree,
               school: item.school,
               startDate: item.startDate,
               endDate: item.endDate,
          };
     });

     return response;
};

const findEducationById = async (request) => {
     const validData = validation(
          request,
          educationValidation.findEducationById
     );

     const education = await educationRepository.findEducation({
          _id: validData.id,
     });
     if (education.length === 0) {
          throw new ResponseError(404, "Education not found!");
     }

     const result = await educationRepository.findEducationById({
          _id: validData.id,
     });

     const response = {
          id: result.id,
          degree: result.degree,
          school: result.school,
          startDate: result.startDate,
          endDate: result.endDate,
     };

     return response;
};

const updateEducation = async (request) => {
     const validData = validation(
          request,
          educationValidation.updateEducation
     );

     const education = await educationRepository.findEducation({
          _id: validData.id,
     });
     if (education.length === 0) {
          throw new ResponseError(404, "Education not found!");
     }

     const updateData = {
          degree: validData.degree,
          school: validData.school,
          startDate: validData.startDate,
          endDate: validData.endDate,
     };
     const result = await educationRepository.updateEducation(
          { _id: validData.id },
          updateData
     );

     const response = {
          id: result.id,
          degree: result.degree,
          school: result.school,
          startDate: result.startDate,
          endDate: result.endDate,
     };

     return response;
};

const deleteEducation = async (request) => {
     const validData = validation(
          request,
          educationValidation.deleteEducation
     );

     const education = await educationRepository.findEducation({
          _id: validData.id,
     });
     if (education.length === 0) {
          throw new ResponseError(404, "Education not found!");
     }

     const result = await educationRepository.deleteEducation({
          _id: validData.id,
     });

     const response = {
          id: result.id,
          degree: result.degree,
          school: result.school,
          startDate: result.startDate,
          endDate: result.endDate,
     };

     return response;
};
module.exports = {
     createEducation,
     findEducation,
     findEducationById,
     updateEducation,
     deleteEducation,
};
