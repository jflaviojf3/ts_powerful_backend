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
    id_objetivos: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    descricao: DataTypes.STRING,
    marcado: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Objetivos',
    paranoid: true,
  });
  return Objetivos;
};