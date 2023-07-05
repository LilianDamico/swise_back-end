const bcrypt = require("bcryptjs");
const saltRounds = 10;

const createBcryptHash = (req, res, next) => {
  const { user_password } = req.body;
  bcrypt.hash(user_password, saltRounds, function (err, hash) {
    if (err) {
      console.error(err);
      return;
    }
    req.body.user_password = hash;
    next();
  });
};

module.exports = { createBcryptHash };
