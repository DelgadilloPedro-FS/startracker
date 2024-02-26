"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Galaxy extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Galaxy.hasMany(models.Star);
    }
  }
  Galaxy.init(
    {
      Name: DataTypes.STRING,
      Size: DataTypes.INTEGER,
      Description: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Galaxy",
    }
  );
  return Galaxy;
};
