const Experiences = require("../models/experienceModel");

const createExperience = async (request) => {
     const experience = await Experiences.create(request);
     return experience;
};

const findExperience = async (request) => {
     const experience = await Experiences.find(request);
     return experience;
};

const findExperienceById = async (request) => {
     const experience = await Experiences.findOne(request);
     return experience;
};

const updateExperience = async (id, data) => {
     const experience = await Experiences.findOneAndUpdate(id, data, {
          new: true,
     });
     return experience;
};

const deleteExperience = async (id) => {
     const experience = await Experiences.findOneAndDelete(id);
     return experience;
};

module.exports = {
     createExperience,
     findExperience,
     findExperienceById,
     updateExperience,
     deleteExperience,
};
