const informationService = require("../services/informationService");

const createInformation = async (req, res, next) => {
     try {
          const request = {
               noHp: req.body.noHp,
               address: req.body.address,
               birthday: req.body.birthday,
               userId: req.user.id,
          };

          const response = await informationService.createInformation(
               request
          );

          res.status(201).json({
               message: "Information created successfully!",
               success: true,
               data: response,
          });
     } catch (error) {
          next(error);
     }
};

const findInformation = async (req, res, next) => {
     try {
          const request = {
               userId: req.user.id,
          };

          const response = await informationService.findInformation(
               request
          );

          res.status(200).json({
               message: "Information found!",
               success: true,
               data: response,
          });
     } catch (error) {
          next(error);
     }
};

const updateInformation = async (req, res, next) => {
     try {
          const request = {
               noHp: req.body.noHp,
               address: req.body.address,
               birthday: req.body.birthday,
               userId: req.user.id,
          };

          const response = await informationService.updateInformation(
               request
          );

          res.status(200).json({
               message: "Information updated successfully!",
               success: true,
               data: response,
          });
     } catch (error) {
          next(error);
     }
};
module.exports = { createInformation, findInformation, updateInformation };
