const passport = require("passport");
const { Strategy } = require("passport-jwt");
const Users = require("../models/userModel");
const Employers = require("../models/employerModel");

const secret = process.env.JWT_SECRET;

const options = {
     jwtFromRequest: (req) => {
          // console.log(req.headers.authorization, "masuk <=====");

          return req.headers.authorization;
     },
     secretOrKey: secret,
};

// eslint-disable-next-line consistent-return
const extractToken = async (payload, done) => {
     try {
          try {
               const { id, role } = payload;
               let user;

               if (role === "user") {
                    user = await Users.findById(id);
               } else if (role === "employer") {
                    user = await Employers.findById(id);
               } else {
                    return done(null, false);
               }

               if (!user) {
                    return done(null, false);
               }

               user.role = role;
               return done(null, user);
          } catch (error) {
               return done(error, false);
          }
     } catch (error) {
          return done(error, false);
     }
};

passport.use(new Strategy(options, extractToken));

module.exports = passport;
