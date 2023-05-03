'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tabelaGenerica extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

    }
  }
  tabelaGenerica.init({
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