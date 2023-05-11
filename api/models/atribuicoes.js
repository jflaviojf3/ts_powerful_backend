"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Atribuicoes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Atribuicoes.belongsTo(models.Cargos, {
        foreignKey: "id_cargos",
      });
    }
  }
  Atribuicoes.init(
    {
      id_atribuicoes: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      descricao: DataTypes.STRING,
      ativo: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Atribuicoes",
      paranoid: true,
    }
  );
  return Atribuicoes;
};
