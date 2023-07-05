const User = require("../models/user");

const createUser = async (userData) => {
  try {
    const newUser = await User.create(userData);
    return { message: "Usuário criado com sucesso", type: "success" };
  } catch (error) {
    console.log(error.message);
    return { message: `Erro ao criar o usuário. ${error.message}`, type: "error" };
  }
};

const searchUser = async (type, info) => {
  try {
    const user = await User.findOne({ where: { [type]: info } });
    if (user === null) {
      return user;
    }
    return user.toJSON();
  } catch (error) {
    console.log(error);
  }
};

module.exports = { searchUser, createUser };
