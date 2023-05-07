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
      descricao: DataTypes.STRING,
      ativo: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Atribuicoes",
    }
  );
  return Atribuicoes;
};
