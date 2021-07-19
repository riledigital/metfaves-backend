// External reference to Met API
module.exports = function (sequelize, DataTypes) {
  return sequelize.define("MetItem", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    data: {
      allowNull: true,
      type: DataTypes.JSON,
    },
  });
};
