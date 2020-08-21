module.exports = function (sequelize, DataTypes) {
  var Name = sequelize.define("Name", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      }
    }
  });
  return Name;
};