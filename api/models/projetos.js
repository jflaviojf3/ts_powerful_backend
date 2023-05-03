'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Projetos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Projetos.hasOne(models.Clientes, {
        foreignKey: 'id_projetos'
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