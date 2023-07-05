const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../../config/database");

const User = sequelize.define("user", {
  user_name: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
  },
  user_email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  user_password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = User;
