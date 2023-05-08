'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tabelaGenerica extends Model {
    static associate(models) {

    }
  }
  tabelaGenerica.init({
    id_tabGenerica: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_propriedade: DataTypes.INTEGER,
    descricao_propriedade: DataTypes.STRING,
    cod_propriedade: DataTypes.INTEGER,
    descricao_codigo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tabelaGenerica',
    freezeTableName: true
  });
  return tabelaGenerica;
};