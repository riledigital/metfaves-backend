const CONFIG = require("../config.js");

// Database connection
const { Sequelize, DataTypes } = require("sequelize");

// Sequelize session
console.debug("Starting database connection: ", CONFIG.DB.CONNECTION);
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: CONFIG.DB.CONNECTION,
});

// Setup all models
const Annotation = require("./Annotation")(sequelize, DataTypes);
const Collection = require("./Collection")(sequelize, DataTypes);
const ItemList = require("./ItemList")(sequelize, DataTypes);
const MetItem = require("./MetItem")(sequelize, DataTypes);
const User = require("./User")(sequelize, DataTypes);

// Create a DB if it doesn't exist
const initializeDb = async function () {
  console.debug("Synchronizing all models...");
  await sequelize.sync({ force: false });
  console.log("All models were synchronized successfully.");
};

const testConnection = async function () {
  try {
    console.debug("Testing database connection...");
    await sequelize.authenticate();
    console.debug("Connection has been established successfully!");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

// Startup sequence
const Startup = async function () {
  initializeDb();
  testConnection();
};

Startup();

module.exports = {
  testConnection,
  sequelize: Sequelize,
  // Models? maybe should go somewhere else
  Annotation,
  Collection,
  User,
  ItemList,
  MetItem,
};
