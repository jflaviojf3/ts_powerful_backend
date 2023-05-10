'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tarefas extends Model {
    static associate(models) {
      Tarefas.hasMany(models.Auditorias, {
        foreignKey: 'id_tarefas'
      })
      
      Tarefas.belongsTo(models.Usuarios, {
        foreignKey: 'id_usuarios'
      })
      Tarefas.belongsTo(models.Projetos, {
        foreignKey: 'id_projetos'
      })
    }
  }
  Tarefas.init({
    id_tarefas: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    entrada: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    descricao: DataTypes.STRING,
    data_inicio: DataTypes.DATE,
    data_fim: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Tarefas',
  });
  return Tarefas;
};