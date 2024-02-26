"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Planet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Planet.belongsToMany(models.Star, {
        through: models.StarsPlanets,
      });
    }
  }
  Planet.init(
    {
      Name: DataTypes.STRING,
      Size: DataTypes.INTEGER,
      Description: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Planet",
    }
  );
  return Planet;
};
