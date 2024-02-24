const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userRepository = require("../repositories/userRepository");
const validation = require("../utilities/validation");
const userValidation = require("../validations/userValidation");
const ResponseError = require("../utilities/responseError");

const secret = process.env.JWT_SECRET;
const expired = process.env.JWT_EXPIRED;

const register = async (request) => {
     const validData = validation(request, userValidation.register);

     const user = await userRepository.findUser({
          email: validData.email,
     });
     if (user.length > 0) {
          throw new ResponseError(400, "Email already exist");
     }

     validData.password = await bcrypt.hash(validData.password, 10);
     const result = await userRepository.createUser(validData);

     const response = {
          id: result.id,
          firstName: result.firstName,
          lastName: result.lastName,
          email: result.email,
     };

     return response;
};

const login = async (request) => {
     const validData = validation(request, userValidation.login);

     const user = await userRepository.findUser({
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
               role: "user",
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
