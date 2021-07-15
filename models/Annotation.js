const { Sequelize, DataTypes } = require("sequelize");
const ItemList = require("./ItemList");
const User = require("./User");

const Annotation = Sequelize.define("Annotation",{
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
module.exports = Annotation;
