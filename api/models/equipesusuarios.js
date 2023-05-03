'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EquipesUsuarios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  EquipesUsuarios.init({
    id_equipes: DataTypes.INTEGER,
    id_usuarios: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'EquipesUsuarios',
  });
  return EquipesUsuarios;
};