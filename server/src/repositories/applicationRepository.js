const Applications = require("../models/applicationModel");

const findApplicationByJobId = async (id) => {
     const application = await Applications.find({ jobId: id });
     return application;
};

const findApplication = async () => {
     const application = await Applications.find();
     return application;
};

const createApplication = async (request) => {
     const application = await Applications.create(request);
     return application;
};

module.exports = {
     findApplicationByJobId,
     findApplication,
     createApplication,
};
