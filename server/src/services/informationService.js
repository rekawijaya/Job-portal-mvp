const informationRepository = require("../repositories/informationRepository");
const validation = require("../utilities/validation");
const informationValidation = require("../validations/informationValidation");
const ResponseError = require("../utilities/responseError");

const createInformation = async (request) => {
     const validData = validation(
          request,
          informationValidation.createInformation
     );

     const information = await informationRepository.findInformation({
          userId: validData.userId,
     });
     if (information.length > 0) {
          throw new ResponseError(400, "information already exist");
     }

     const result = await informationRepository.createInformation(
          validData
     );
     const response = {
          id: result.id,
          noHp: result.noHp,
          address: result.address,
          birthday: result.birthday,
          userId: result.userId,
     };

     return response;
};

const findInformation = async (request) => {
     const validData = validation(
          request,
          informationValidation.findInformation
     );

     const information = await informationRepository.findInformation({
          userId: validData.userId,
     });
     if (information.length === 0) {
          throw new ResponseError(404, "information not found");
     }

     const result = await informationRepository.findInformation({
          userId: validData.userId,
     });

     const response = {
          id: result[0].id,
          noHp: result[0].noHp,
          address: result[0].address,
          birthday: result[0].birthday,
     };

     return response;
};

const updateInformation = async (request) => {
     const validData = validation(
          request,
          informationValidation.updateInformation
     );
     const information = await informationRepository.findInformation({
          userId: validData.userId,
     });
     if (information.length === 0) {
          throw new ResponseError(404, "information not found");
     }

     const result = await informationRepository.updateInformation(
          validData
     );

     const response = {
          id: result.id,
          noHp: result.noHp,
          address: result.address,
          birthday: result.birthday,
     };

     return response;
};

module.exports = { createInformation, findInformation, updateInformation };
