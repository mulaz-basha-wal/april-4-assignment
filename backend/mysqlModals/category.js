const { Sequelize, DataTypes } = require("sequelize");

const db = require("../dbsql");
const category = db.define(
  "category",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);
module.exports = category;
