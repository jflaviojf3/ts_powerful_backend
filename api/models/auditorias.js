'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Auditorias extends Model {
    static associate(models) {
      Auditorias.belongsTo(models.Tarefas, {
        foreignKey: 'id_tarefas'
      })
      Auditorias.belongsTo(models.Pontos, {
        foreignKey: 'id_pontos'
      })
    }
  }
  Auditorias.init({
    descricao: DataTypes.STRING,
    data_hora_inicio: DataTypes.DATE,
    data_hora_fim: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Auditorias',
  });
  return Auditorias;
};