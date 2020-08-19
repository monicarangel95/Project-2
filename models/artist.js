
module.exports = function (sequelize, DataTypes) {
  var Artist = sequelize.define("Artist", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {

=======
        len: [1]
      }
>
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {

        len: [1]
      }

    },
    song: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {

=======
        len: [1]
      }
    }
  });
  return Artist;
};

