'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pontos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pontos.init({
    situacao: DataTypes.STRING,
    hora_ponto: DataTypes.DATE,
    descricao: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pontos',
  });
  return Pontos;
};