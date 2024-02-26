const Users = require("../models/userModel");

const findUser = async (email) => {
     const result = await Users.find(email);
     return result;
};

const createUser = async (data) => {
     const result = await Users.create(data);
     return result;
};

const findUserById = async (id) => {
     const result = await Users.find(id);
     return result;
};

module.exports = {
     findUser,
     createUser,
     findUserById,
};
