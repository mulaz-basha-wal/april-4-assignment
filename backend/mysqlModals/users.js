const { Sequelize, DataTypes } = require("sequelize");

const db = require("../dbsql");
const Users = db.define(
  "users",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    dob: {
      type: DataTypes.DATE,
      //type:DataTypes.DATEONLY
    },
  },
  {
    freezeTableName: true,
  }
);
module.exports = Users;
