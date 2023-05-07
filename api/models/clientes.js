'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Clientes extends Model {
    static associate(models) {
      Clientes.belongsTo(models.Projetos, {
        foreignKey: 'id_projetos'
      });
    }
  }
  Clientes.init({
    nome: DataTypes.STRING,
    data_inicio: DataTypes.DATEONLY,
    data_fim: DataTypes.DATEONLY,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Clientes',
  });
  return Clientes;
};