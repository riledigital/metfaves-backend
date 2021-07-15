// ItemList is a normalized table containing relations between collecions and item records.
const { Sequelize, DataTypes } = require("sequelize");

const ItemList = Sequelize.define("ItemList", {
  // Model attributes are defined here
  id: {
    type: DataTypes.UUIDV4,
    allowNull: false,
  },
  metId: {
    type: DataTypes.TEXT,
  },
  
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: "User" // We need to choose the model name
});

module.exports = ItemList;
