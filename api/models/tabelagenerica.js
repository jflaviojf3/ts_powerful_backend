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
      // define association here
    }
  }
  tabelaGenerica.init({
    idPropriedade: DataTypes.INTEGER,
    descricaoPropriedade: DataTypes.STRING,
    codPropriedade: DataTypes.INTEGER,
    descricaoCodigo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tabelaGenerica',
    freezeTableName: true
  });
  return tabelaGenerica;
};