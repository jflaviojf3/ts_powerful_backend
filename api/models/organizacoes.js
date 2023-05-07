'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Organizacoes extends Model {
    static associate(models) {
      Organizacoes.hasMany(models.Usuarios, {
        foreignKey: 'id_organizacoes'
      })
      Organizacoes.hasMany(models.Equipes, {
        foreignKey: 'id_organizacoes'
      })
      Organizacoes.hasMany(models.Projetos, {
        foreignKey: 'id_organizacoes'
      })
    }
  }
  Organizacoes.init({
    nome: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Organizacoes',
  });
  return Organizacoes;
};