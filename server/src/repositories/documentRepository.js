const Documents = require("../models/documentModel");

const createDocument = async (request) => {
     const document = await Documents.create(request);
     return document;
};

const findDocument = async (request) => {
     const document = await Documents.find(request);
     return document;
};

const findDocumentById = async (request) => {
     const document = await Documents.findOne(request);
     return document;
};

const updateDocument = async (id, data) => {
     const document = await Documents.findOneAndUpdate(id, data, {
          new: true,
     });
     return document;
};

const deleteDocument = async (id) => {
     const document = await Documents.findOneAndDelete(id);
     return document;
};

module.exports = {
     createDocument,
     findDocument,
     findDocumentById,
     updateDocument,
     deleteDocument,
};
