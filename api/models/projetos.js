'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Projetos extends Model {
    static associate(models) {
      Projetos.belongsTo(models.Clientes, {
        foreignKey: 'id_clientes'
      })

      Projetos.hasMany(models.Tarefas, {
        foreignKey: 'id_projetos'
      })
      Projetos.belongsTo(models.Organizacoes, {
        foreignKey: 'id_organizacoes'
      })
      Projetos.belongsTo(models.Equipes, {
        foreignKey: 'id_equipes'
      })
    }
  }
  Projetos.init({
    id_projetos: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: DataTypes.STRING,
    data_inicio: DataTypes.DATEONLY,
    data_fim: DataTypes.DATEONLY,
    duracao_prevista: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Projetos',
  });
  return Projetos;
};