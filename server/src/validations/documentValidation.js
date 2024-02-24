const joi = require("joi");

const createDocument = joi.object({
     documentName: joi.string().required(),
     documentImage: joi.string().required(),
     userId: joi.string().required(),
});

const findDocument = joi.object({
     userId: joi.string().required(),
});

const findDocumentById = joi.object({
     id: joi.string().required(),
     userId: joi.string().required(),
});

const updateDocument = joi.object({
     id: joi.string().required(),
     userId: joi.string().required(),
     documentName: joi.string(),
     documentImage: joi.string(),
});

const deleteDocument = joi.object({
     id: joi.string().required(),
     userId: joi.string().required(),
});

module.exports = {
     createDocument,
     findDocument,
     findDocumentById,
     updateDocument,
     deleteDocument,
};
