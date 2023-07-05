const jwt = require("jsonwebtoken");
require("dotenv").config();

const jwtGenerator = (data) => {
  const tokenData = data;
  return jwt.sign(tokenData, process.env.JWT_KEY, { expiresIn: "3hr" });
};

module.exports = jwtGenerator;
