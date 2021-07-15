// ItemList is a normalized table containing relations between collecions and item records.
const { Sequelize, DataTypes } = require("sequelize");

const ItemList = Sequelize.define("ItemList", {
  // Model attributes are defined here
  id: {
    type: DataTypes.UUIDV4,
    allowNull: false,
    unique: true
  },
  jsonList: {
    type: DataTypes.JSON,
    allowNull: true
  },
});

module.exports = ItemList;
