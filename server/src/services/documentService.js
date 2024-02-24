const documentRepository = require("../repositories/documentRepository");
const validation = require("../utilities/validation");
const documentValidation = require("../validations/documentValidation");
const ResponseError = require("../utilities/responseError");

const createDocument = async (request) => {
     const validData = validation(
          request,
          documentValidation.createDocument
     );

     const result = await documentRepository.createDocument(validData);

     const response = {
          id: result.id,
          documentName: result.documentName,
          documentImage: result.documentImage,
     };

     return response;
};

const findDocument = async (request) => {
     const validData = validation(
          request,
          documentValidation.findDocument
     );

     const document = await documentRepository.findDocument(validData);
     if (document.length === 0) {
          throw new ResponseError(404, "Document not found!");
     }

     const response = document.map((item) => {
          return {
               id: item.id,
               documentName: item.documentName,
               documentImage: item.documentImage,
          };
     });

     return response;
};

const findDocumentById = async (request) => {
     const validData = validation(
          request,
          documentValidation.findDocumentById
     );

     const document = await documentRepository.findDocument({
          _id: validData.id,
     });
     if (document.length === 0) {
          throw new ResponseError(404, "Document not found!");
     }

     const result = await documentRepository.findDocumentById({
          _id: validData.id,
     });

     const response = {
          id: result.id,
          documentName: result.documentName,
          documentImage: result.documentImage,
     };

     return response;
};

const updateDocument = async (request) => {
     const validData = validation(
          request,
          documentValidation.updateDocument
     );

     const document = await documentRepository.findDocument({
          _id: validData.id,
     });
     if (document.length === 0) {
          throw new ResponseError(404, "Document not found!");
     }

     const updateData = {
          documentName: validData.documentName,
          documentImage: validData.documentImage,
     };

     const result = await documentRepository.updateDocument(
          {
               _id: validData.id,
          },
          updateData
     );
     const response = {
          id: result.id,
          documentName: result.documentName,
          documentImage: result.documentImage,
     };

     return response;
};

const deleteDocument = async (request) => {
     const validData = validation(
          request,
          documentValidation.deleteDocument
     );

     const document = await documentRepository.findDocument({
          _id: validData.id,
     });
     if (document.length === 0) {
          throw new ResponseError(404, "Document not found!");
     }

     const result = await documentRepository.deleteDocument({
          _id: validData.id,
     });

     const response = {
          id: result.id,
          documentName: result.documentName,
          documentImage: result.documentImage,
     };

     return response;
};

module.exports = {
     createDocument,
     findDocument,
     findDocumentById,
     updateDocument,
     deleteDocument,
};
