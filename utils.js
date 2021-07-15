const CONFIG = require("./config.js");

// Database connection
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: CONFIG.DB.CONNECTION
});

const Collection = require("./models/Collection")(sequelize, DataTypes);
// const Collection = require("./models/Collection")(sequelize, Sequelize.DataTypes)
  
const testConnection = async function () {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

module.exports = {
  testConnection, sequelize: Sequelize, Collection
};
