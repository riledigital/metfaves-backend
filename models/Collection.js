module.exports = function (sequelize, DataTypes) {
  return sequelize.define("Collection",{
  // Model attributes are defined here
    id: {
      type: DataTypes.UUIDV4,
      default: DataTypes.UUIDV4,
      primaryKey: true,
      unique: true
    },
    author: {
      allowNull: true,
      type: DataTypes.STRING,
      references: {
        model: "Users",
        key: "id"
      }
    },
    public: {
      type: DataTypes.BOOLEAN,
      default: true,
    },
    items: {
      allowNull: true,
      type: DataTypes.UUIDV4,
      references: {
        model: "ItemLists",
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
