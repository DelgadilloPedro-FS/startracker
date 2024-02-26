'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Star extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Star.belongsToMany(models.Planet, {through: models.StarsPlanets});
      models.Star.belongsTo(models.Galaxy);
    }
  }
  Star.init({
    Name: DataTypes.STRING,
    Size: DataTypes.INTEGER,
    Description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Star',
  });
  return Star;
};