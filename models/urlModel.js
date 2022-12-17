const { DataTypes} = require("sequelize");
const sequelize = require("../config/db");

const Url = sequelize.define("Url", {
  longUrl : {
    type: DataTypes.STRING,
    allowNull: false,
  },
  shortUrl: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

module.exports = Url;