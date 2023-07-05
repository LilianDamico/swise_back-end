const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  `postgres://${process.env.PG_USERNAME}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}/${process.env.PG_DATABASE}`,
  {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  }
);

const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error.message);
  }
};

// Dropa a tabela?
//const syncWithDB = async () => {
//  await sequelize.sync({ force: true });
//};
//
testConnection();

module.exports = sequelize;
