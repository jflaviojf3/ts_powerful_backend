'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pontos extends Model {
    static associate(models) {
      Pontos.hasMany(models.Auditorias, {
        foreignKey: 'id_pontos'
      })
      Pontos.belongsTo(models.Usuarios, {
        foreignKey: 'id_usuarios'
      })
    }
  }
  Pontos.init({
    situacao: DataTypes.STRING,
    hora_ponto: DataTypes.DATE,
    descricao: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pontos',
  });
  return Pontos;
};