module.exports = function (sequelize, DataTypes) {
  var Event = sequelize.define("Event", {
    // artist: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   validate: {
    //     len: [1],
    //   },
    // },
    venue: {
      type: DataTypes.TEXT,
      allowNull: true,
      validate: {
        len: [1],
      },
    },
    Date: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
  return Event;
};
