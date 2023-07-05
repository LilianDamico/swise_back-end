const bcrypt = require("bcryptjs");
const userRepository = require("../repositories/userRepository");
const jwtGenerator = require("./jwtGenerator");

const loginService = async (userData) => {
  const verifyAccountEmail = await userRepository.searchUser("user_email", userData.user_email);

  if (!verifyAccountEmail) {
    return false;
  }

  try {
    const passwordMatch = await bcrypt.compare(userData.user_password, verifyAccountEmail.user_password);
    if (!passwordMatch) {
      return passwordMatch;
    }

    const jwt = jwtGenerator({ user_name: userData.user_name });
    return jwt;
  } catch (error) {
    console.error(err);
  }
};

module.exports = { loginService };
