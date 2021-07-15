const { Sequelize, DataTypes } = require("sequelize");
// External reference to Met API
const MetItem = Sequelize.define("MetItem",{
  id: {
    type: DataTypes.UUIDV4,
    allowNull: false,
    unique: true
  },
  data: {
    allowNull: true,
    type: DataTypes.JSON
  },
});
module.exports = MetItem;
