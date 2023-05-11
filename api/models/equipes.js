'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Equipes extends Model {
    static associate(models) {
      Equipes.hasOne(models.Projetos, {
        foreignKey: 'id_equipes'
      })

      Equipes.belongsToMany(models.Usuarios, {through: 'EquipesUsuarios', foreignKey: 'id_equipes'})

      Equipes.belongsTo(models.Organizacoes, {
        foreignKey: 'id_organizacoes'
      })
    }
  }
  Equipes.init({
    id_equipes: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: DataTypes.STRING,
    descricao: DataTypes.STRING,
    data_inicio: DataTypes.DATEONLY,
    data_fim: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Equipes',
    paranoid: true,
  });
  return Equipes;
};