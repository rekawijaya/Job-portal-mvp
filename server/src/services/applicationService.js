const applicationRepository = require("../repositories/applicationRepository");
const ResponseError = require("../utilities/responseError");
const validation = require("../utilities/validation");
const applicationValidation = require("../validations/applicationValidation");

const createApplication = async (request) => {
     const validData = validation(
          request,
          applicationValidation.createApplication
     );

     const application =
          await applicationRepository.findApplicationByJobId(
               validData.jobId
          );
     if (application.length > 0) {
          throw new ResponseError(400, "Application already exists!");
     }

     const result = await applicationRepository.createApplication(
          validData
     );

     const response = {
          id: result.id,
          jobId: result.jobId,
          userId: result.userId,
          status: result.status,
          proccess: result.proccess,
     };

     return response;
};

const findApplication = async () => {
     const result = await applicationRepository.findApplication();
     const response = result.map((item) => {
          return {
               id: item.id,
               jobId: item.jobId,
               userId: item.userId,
               status: item.status,
               proccess: item.proccess,
          };
     });

     return response;
};

module.exports = {
     createApplication,
     findApplication,
};
