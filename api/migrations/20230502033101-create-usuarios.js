'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Usuarios', {
      id_usuarios: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      sobrenome: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      senha: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      ativo: {
        allowNull: false,
        defaultValue: 1,
        type: Sequelize.BOOLEAN,
      },
      ddd: {
        type: Sequelize.INTEGER
      },
      telefone: {
        type: Sequelize.INTEGER
      },
      data_nascimento: {
        type: Sequelize.DATEONLY
      },
      cpf: {
        type: Sequelize.STRING
      },
      descricao: {
        type: Sequelize.STRING
      },
      foto: {
        type: Sequelize.BLOB('medium')
      },
      cod_sexo: {
        type: Sequelize.INTEGER,
      },
      cod_perfil: {
        type: Sequelize.INTEGER,
      },
      id_cargo: {
        type: Sequelize.INTEGER,
        references: {model: 'Cargos', key: 'id_cargos'}
      },
      id_organizacoes: {
        type: Sequelize.INTEGER,
        references: {model: 'Organizacoes', key: 'id_organizacoes'}
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Usuarios');
  }
};