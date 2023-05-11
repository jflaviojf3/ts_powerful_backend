'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Clientes extends Model {
    static associate(models) {
      Clientes.hasMany(models.Projetos, {
        foreignKey: 'id_clientes'
      });
    }
  }
  Clientes.init({
    id_clientes: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: DataTypes.STRING,
    descricao: DataTypes.STRING,
    data_inicio: DataTypes.DATEONLY,
    data_fim: DataTypes.DATEONLY,
    email: DataTypes.STRING,
    cod_prioridade: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Clientes',
    paranoid: true,
  });
  return Clientes;
};