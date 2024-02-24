const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const employerRepository = require("../repositories/employerRepository");
const validation = require("../utilities/validation");
const employerValidation = require("../validations/employerValidation");
const ResponseError = require("../utilities/responseError");

const secret = process.env.JWT_SECRET;
const expired = process.env.JWT_EXPIRED;

const register = async (request) => {
     const validData = validation(request, employerValidation.register);

     const user = await employerRepository.findEmployer({
          email: validData.email,
     });
     if (user.length > 0) {
          throw new ResponseError(400, "Email already exist");
     }

     validData.password = await bcrypt.hash(validData.password, 10);
     const result = await employerRepository.createEmployer(validData);

     const response = {
          id: result.id,
          email: result.email,
          companyName: result.companyName,
          companyDescription: result.companyDescription,
          address: result.address,
          noHp: result.noHp,
     };

     return response;
};

const login = async (request) => {
     const validData = validation(request, employerValidation.login);

     const user = await employerRepository.findEmployer({
          email: validData.email,
     });
     if (user.length === 0) {
          throw new ResponseError(401, "Email or password is wrong");
     }

     const isPasswordValid = await bcrypt.compare(
          validData.password,
          user[0].password
     );
     if (!isPasswordValid) {
          throw new ResponseError(401, "Email or password is wrong");
     }

     const token = jwt.sign(
          {
               id: user[0].id,
               role: "employer",
          },
          secret,
          {
               expiresIn: expired,
          }
     );

     const response = {
          token,
     };

     return response;
};

module.exports = {
     register,
     login,
};
