'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Objetivos extends Model {
    static associate(models) {
      Objetivos.belongsTo(models.Projetos, {
        foreignKey: "id_projetos",
      });
    }
  }
  Objetivos.init({
    descricao: DataTypes.STRING,
    marcado: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Objetivos',
  });
  return Objetivos;
};