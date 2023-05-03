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
      Usuarios.hasMany(models.Pontos, {
        foreignKey: 'id_usuarios'
      })
      Usuarios.hasMany(models.Tarefas,  {
        foreignKey: 'id_usuarios'
      })
      
      Usuarios.belongsToMany(models.Equipes, {through: 'EquipesUsuarios', foreignKey: 'id_usuarios'})
      
      Usuarios.belongsTo(models.Organizacoes, {
        foreignKey: 'id_organizacoes'
      })
      Usuarios.belongsTo(models.Cargos, {
        foreignKey: 'id_cargos'
      })
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
    foto: DataTypes.BLOB,
    cod_sexo: DataTypes.INTEGER,
    cod_perfil: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Usuarios',
  });
  return Usuarios;
};