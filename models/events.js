module.exports = function (sequelize, DataTypes) {
  var Event = sequelize.define("Event", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    location: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1],
      },
    },
    date: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
  return Event;
};