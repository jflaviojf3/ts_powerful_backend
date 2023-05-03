'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tarefas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
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
    descricao: DataTypes.STRING,
    data_inicio: DataTypes.DATE,
    data_fim: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Tarefas',
  });
  return Tarefas;
};