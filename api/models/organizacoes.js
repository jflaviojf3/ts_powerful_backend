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
    id_organizacoes: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Organizacoes',
  });
  return Organizacoes;
};