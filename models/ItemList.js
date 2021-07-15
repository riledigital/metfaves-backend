// ItemList is a normalized table containing relations between collecions and item records.
module.exports = function (sequelize, DataTypes) {
  return sequelize.define("ItemList", {
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
};
