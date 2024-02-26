const employerService = require("../services/employerService");

const register = async (req, res, next) => {
     try {
          const request = {
               email: req.body.email,
               password: req.body.password,
               companyName: req.body.companyName,
               companyDescription: req.body.companyDescription,
               address: req.body.address,
               noHp: req.body.noHp,
          };

          const response = await employerService.register(request);

          res.status(201).json({
               message: "Register success",
               success: true,
               data: response,
          });
     } catch (error) {
          next(error);
     }
};

const login = async (req, res, next) => {
     try {
          const request = {
               email: req.body.email,
               password: req.body.password,
          };

          const response = await employerService.login(request);

          res.status(200)
               .cookie("authorization", response.token, {
                    httpOnly: true,
                    secure: true,
               })
               .json({
                    message: "Login success",
                    success: true,
                    data: response,
               });
     } catch (error) {
          next(error);
     }
};

const logout = async (req, res, next) => {
     try {
          res.status(200).clearCookie("authorization").json({
               message: "Employer logged out successfully!",
               success: true,
          });
     } catch (error) {
          next(error);
     }
};

const findEmployer = async (req, res, next) => {
     try {
          const request = {
               id: req.user.id,
          };

          const response = await employerService.findEmployer(request);

          res.status(200).json({
               message: "Employer found successfully!",
               success: true,
               data: response,
          });
     } catch (error) {
          next(error);
     }
};
module.exports = {
     register,
     login,
     logout,
     findEmployer,
};
