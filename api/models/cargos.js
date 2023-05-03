'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cargos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Cargos.hasMany(models.Usuarios, {
        foreignKey: 'id_cargos'
      })
    }
  }
  Cargos.init({
    descricao_cargo: DataTypes.STRING,
    data_inicio: DataTypes.DATEONLY,
    data_fim: DataTypes.DATEONLY,
    cod_categoria: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Cargos',
  });
  return Cargos;
};