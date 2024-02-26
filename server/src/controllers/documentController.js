const documentService = require("../services/documentService");

const createDocument = async (req, res, next) => {
     try {
          const request = {
               documentName: req.body.documentName,
               documentImage: req.file.path,
               userId: req.user.id,
          };

          const response = await documentService.createDocument(request);

          res.status(201).json({
               message: "Document created successfully!",
               success: true,
               data: response,
          });
     } catch (error) {
          next(error);
     }
};

const findDocument = async (req, res, next) => {
     try {
          const request = {
               userId: req.user.id,
          };

          const response = await documentService.findDocument(request);

          res.status(200).json({
               message: "Document found successfully!",
               success: true,
               data: response,
          });
     } catch (error) {
          next(error);
     }
};

const findDocumentById = async (req, res, next) => {
     try {
          const request = {
               id: req.params.documentId,
               userId: req.user.id,
          };

          const response = await documentService.findDocumentById(request);

          res.status(200).json({
               message: "Document found successfully!",
               success: true,
               data: response,
          });
     } catch (error) {
          next(error);
     }
};

const updateDocument = async (req, res, next) => {
     try {
          const request = {
               id: req.params.documentId,
               documentName: req.body.documentName,
               documentImage: req.file.path,
               userId: req.user.id,
          };
          const response = await documentService.updateDocument(request);

          res.status(200).json({
               message: "Document updated successfully!",
               success: true,
               data: response,
          });
     } catch (error) {
          next(error);
     }
};

const deleteDocument = async (req, res, next) => {
     try {
          const request = {
               id: req.params.documentId,
               userId: req.user.id,
          };

          const response = await documentService.deleteDocument(request);

          res.status(200).json({
               message: "Document deleted successfully!",
               success: true,
               data: response,
          });
     } catch (error) {
          next(error);
     }
};

module.exports = {
     createDocument,
     findDocument,
     findDocumentById,
     updateDocument,
     deleteDocument,
};
