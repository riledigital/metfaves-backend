module.exports = function (sequelize, DataTypes) {
  return sequelize.define("User", {
    // Model attributes are defined here
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(140),
      unique: true,
      allowNull: false,
    },
    email: {
      allowNull: true,
      type: DataTypes.STRING(140),
      unique: true,
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
