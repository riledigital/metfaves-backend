const { Sequelize, DataTypes } = require("sequelize");
const ItemList = require("./ItemList");
const User = require("./User");

const Collection = Sequelize.define("Collection",{
  // Model attributes are defined here
  id: {
    type: DataTypes.UUIDV4,
    allowNull: false,
    unique: true
  },
  author: {
    allowNull: false,
    references: {
      model: User,
      key: "id"
    }
  },
  public: {
    type: DataTypes.BOOLEAN,
    default: true,
  },
  items: {
    type: DataTypes.UUIDV4,
    references: {
      model: ItemList,
      key: "id"
    }
  },
  itemJson: {
    type: DataTypes.JSON,
  },
  name: {
    type: DataTypes.STRING(140),
    unique: true,
    allowNull: false,
  },
  description: {
    allowNull: true,
    type: DataTypes.STRING(140)
  },
  iconUrl: {
    allowNull: true,
    type: DataTypes.TEXT
  },
});
module.exports = Collection;
