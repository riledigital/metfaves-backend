const CONFIG = require("../config.js");

// Database connection
const { Sequelize, DataTypes } = require("sequelize");

// Sequelize session
console.debug("Starting database connection: ", CONFIG.DB.CONNECTION);
const session = new Sequelize({
  dialect: "sqlite",
  storage: CONFIG.DB.CONNECTION,
});

// Setup models
const setupModel = function (module) {
  const theModule = require(`./${module}`)(session, DataTypes);
  AllModels.push(theModule);
  return theModule;
};

// Use all the models!
const fs = require("fs");
const AllModels = [];

fs.readdir("./models", (err, files) => {
  files.forEach((file) => {
    if (file.includes(".DS_Store") || file.includes("index")) {
      return;
    }
    console.debug("Using model:", file);
    setupModel(file);
  });
});

// Create a DB if it doesn't exist
const initializeDb = async function () {
  console.debug("Synchronizing all models...");
  await session.sync({ force: false });
  console.log("All models were synchronized successfully.");
};

const testConnection = async function () {
  try {
    console.debug("Testing database connection...");
    await session.authenticate();
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
  sequelize: session,
  // Models? maybe should go somewhere else
  ...AllModels,
  // Annotation,
  // Collection,
  // User,
  // ItemList,
  // MetItem,
};
