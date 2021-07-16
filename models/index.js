const CONFIG = require("../config.js");

// Database connection
const { Sequelize, DataTypes } = require("sequelize");

// Sequelize session
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: CONFIG.DB.CONNECTION
});

const Annotation = require("./Annotation")(sequelize, DataTypes);
const Collection = require("./Collection")(sequelize, DataTypes);
const ItemList = require("./ItemList")(sequelize, DataTypes);
const MetItem = require("./MetItem")(sequelize, DataTypes);
const User = require("./User")(sequelize, DataTypes);
// const Collection = require("./models/Collection")(sequelize, Sequelize.DataTypes)

const initializeDb = async function () {
  await sequelize.sync();
  console.log("All models were synchronized successfully.");
};
  
const testConnection = async function () {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

(async function () {
  await initializeDb({force: true});
})();

module.exports = {
  testConnection, sequelize: Sequelize,
  // Models? maybe should go somewhere else
  Annotation, Collection, User, ItemList, MetItem
};
