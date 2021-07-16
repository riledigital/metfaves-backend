const MetItem = require("./MetItem");
const User = require("./User");

module.exports = function (sequelize, DataTypes) {
  return sequelize.define("Annotation",{
    id: {
      type: DataTypes.UUIDV4,
      allowNull: false,
      unique: true,
      primaryKey: true
    },
    metItem: {
      type: DataTypes.UUIDV4,
      references: {
        model: "MetItem",
        key: "id"
      }
    },
    author: {
      type: DataTypes.UUIDV4,      
      allowNull: false,
      references: {
        model: "User",
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
    body: {
      allowNull: true,
      type: DataTypes.TEXT
    }
  });  
};
