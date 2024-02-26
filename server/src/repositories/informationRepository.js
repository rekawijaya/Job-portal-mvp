const Informations = require("../models/informationModel");

const findInformation = async (userId) => {
     const result = await Informations.find(userId);
     return result;
};

const createInformation = async (data) => {
     const result = await Informations.create(data);
     return result;
};

const updateInformation = async (data) => {
     const result = await Informations.findOneAndUpdate(
          { userId: data.userId },
          data,
          { new: true }
     );
     return result;
};

module.exports = {
     findInformation,
     createInformation,
     updateInformation,
};
