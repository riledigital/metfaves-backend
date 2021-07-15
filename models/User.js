module.exports = function (sequelize, DataTypes) {
  return sequelize.define("User",{
  // Model attributes are defined here
    id: {
      type: DataTypes.UUIDV4,
      allowNull: false,
      unique: true,
      primaryKey: true
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
};
