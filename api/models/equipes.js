'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Equipes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
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
    nome: DataTypes.STRING,
    descricao: DataTypes.STRING,
    data_inicio: DataTypes.DATEONLY,
    data_fim: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Equipes',
  });
  return Equipes;
};