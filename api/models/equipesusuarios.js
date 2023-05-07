'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EquipesUsuarios extends Model {
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