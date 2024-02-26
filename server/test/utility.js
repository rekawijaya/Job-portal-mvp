const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../src/models/userModel");
const Information = require("../src/models/informationModel");

const secret = process.env.JWT_SECRET;
const expired = process.env.JWT_EXPIRED;

const userData = {
     firstName: "firstNameTest",
     lastName: "lastNameTest",
     email: "emailTest@emailTest.com",
     password: "passwordTest",
};

const informationData = {
     noHp: "081234567890",
     address: "addressTest",
     birthday: "2000-01-01",
};

const createUser = async () => {
     userData.password = await bcrypt.hash(userData.password, 10);
     const user = await User.create(userData);
     return user;
};

const getUserToken = async () => {
     const user = await User.findOne({ email: userData.email });
     const token = jwt.sign(
          {
               id: user.id,
               role: "user",
          },
          secret,
          {
               expiresIn: expired,
          }
     );

     return token;
};

const deleteUser = async () => {
     await User.deleteMany({ email: userData.email });
};

// information
const createInformation = async () => {
     const user = await User.findOne({ email: userData.email });
     const information = await Information.create({
          noHp: informationData.noHp,
          address: informationData.address,
          birthday: informationData.birthday,
          userId: user.id,
     });

     return information;
};

const deleteInformation = async () => {
     const user = await User.findOne({ email: userData.email });
     await Information.deleteMany({ userId: user.id });
};

module.exports = {
     createUser,
     getUserToken,
     deleteUser,
     deleteInformation,
     createInformation,
};
