'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuarios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Usuarios.init({
    nome: DataTypes.STRING,
    sobrenome: DataTypes.STRING,
    email: DataTypes.STRING,
    senha: DataTypes.STRING,
    ativo: DataTypes.INTEGER,
    ddd: DataTypes.INTEGER,
    telefone: DataTypes.INTEGER,
    data_nascimento: DataTypes.DATEONLY,
    cpf: DataTypes.INTEGER,
    descricao: DataTypes.STRING,
    foto: DataTypes.BLOB
  }, {
    sequelize,
    modelName: 'Usuarios',
  });
  return Usuarios;
};