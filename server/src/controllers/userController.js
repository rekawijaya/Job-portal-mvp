const userService = require("../services/userService");

const register = async (req, res, next) => {
     try {
          const request = {
               firstName: req.body.firstName,
               lastName: req.body.lastName,
               email: req.body.email,
               password: req.body.password,
          };

          const response = await userService.register(request);

          res.status(201).json({
               message: "User created successfully!",
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

          const response = await userService.login(request);

          res.status(200)
               .cookie("authorization", response.token, {
                    httpOnly: true,
                    secure: true,
               })
               .json({
                    message: "User logged in successfully!",
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
               message: "User logged out successfully!",
               success: true,
          });
     } catch (error) {
          next(error);
     }
};

module.exports = { register, login, logout };
