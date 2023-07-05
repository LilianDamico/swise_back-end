const userRepository = require("../repositories/userRepository");
const { verifyUserInformation } = require("../services/verifyUserInformation");

const create_user = async (req, res) => {
  const newUserData = req.body;
  const verifyNewUserInfo = await verifyUserInformation(newUserData);

  if (verifyNewUserInfo.type === "error") {
    return res.status(400).json(verifyNewUserInfo);
  }

  const createUser = await userRepository.createUser(newUserData);
  return res.status(createUser.type === "error" ? 400 : 200).json(createUser);
};

module.exports = { create_user };
