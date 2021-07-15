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
  }
});
module.exports = Collection;
