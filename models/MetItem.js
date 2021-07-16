// External reference to Met API
module.exports = function (sequelize, DataTypes) {  
  return sequelize.define("MetItem", {
    id: {
      type: DataTypes.UUIDV4,
      default: DataTypes.UUIDV4,
      allowNull: false,
      unique: true,
      primaryKey: true,
    },
    data: {
      allowNull: true,
      type: DataTypes.JSON
    },
  });  
};
