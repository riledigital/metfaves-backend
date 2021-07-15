const ItemList = require("./ItemList");
const User = require("./User");

module.exports = function (sequelize, DataTypes) {
  return sequelize.define("Collection",{
  // Model attributes are defined here
    id: {
      type: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    author: {
      allowNull: false,
      type: DataTypes.UUIDV4,
      references: {
        model: "User",
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
        model: "ItemList",
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
};
