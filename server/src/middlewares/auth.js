const passport = require("../utilities/passport");
const ResponseError = require("../utilities/responseError");

const authenticate = passport.authenticate("jwt", { session: false });

const isUser = (req, res, next) => {
     if (req.user.role === "user") {
          next();
     } else {
          throw new ResponseError(401, "Unauthorized");
     }
};

const isEmployer = (req, res, next) => {
     if (req.user.role === "employer") {
          next();
     } else {
          throw new ResponseError(401, "Unauthorized");
     }
};

module.exports = { authenticate, isUser, isEmployer };
