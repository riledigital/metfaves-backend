const { Sequelize, DataTypes } = require("sequelize");
const User = Sequelize.define("Collection",{
  // Model attributes are defined here
  id: {
    type: DataTypes.UUIDV4,
    allowNull: false,
    unique: true
  },
  name: {
    type: DataTypes.STRING(140),
    unique: true,
    allowNull: false,
  },
  bio: {
    allowNull: true,
    type: DataTypes.STRING(140)
  },
  profilePictureUrl: {
    allowNull: true,
    type: DataTypes.TEXT
  }
});

module.exports = User;
