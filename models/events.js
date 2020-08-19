module.exports = function (sequelize, DataTypes) {
  var Event = sequelize.define("Event", {
    venue: {
      type: DataTypes.TEXT,
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
