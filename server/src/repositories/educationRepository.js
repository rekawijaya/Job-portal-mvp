const Educations = require("../models/educationModel");

const createEducation = async (request) => {
     const education = await Educations.create(request);
     return education;
};

const findEducation = async (request) => {
     const education = await Educations.find(request);
     return education;
};

const findEducationById = async (request) => {
     const education = await Educations.findOne(request);
     return education;
};

const updateEducation = async (id, data) => {
     const education = await Educations.findOneAndUpdate(id, data, {
          new: true,
     });
     return education;
};

const deleteEducation = async (id) => {
     const education = await Educations.findOneAndDelete(id);
     return education;
};

module.exports = {
     createEducation,
     findEducation,
     findEducationById,
     updateEducation,
     deleteEducation,
};
