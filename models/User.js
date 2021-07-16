module.exports = function (sequelize, DataTypes) {
  return sequelize.define("User", {
    // Model attributes are defined here
    id: {
      type: DataTypes.UUIDV4,
      default: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(140),
      unique: false,
      allowNull: false,
    },
    email: {
      allowNull: true,
      type: DataTypes.STRING(140),
    },
    bio: {
      allowNull: true,
      type: DataTypes.STRING(140),
    },
    profilePictureUrl: {
      allowNull: true,
      type: DataTypes.TEXT,
    },
  });
};
