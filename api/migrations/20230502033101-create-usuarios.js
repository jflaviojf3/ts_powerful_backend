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
        type: Sequelize.STRING,
        allowNull: false,
      },
      sobrenome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      senha: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      ativo: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: 1
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
      id_cargo: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references: {model: 'Cargos', key: 'id_cargos'}
      },
      id_organizacoes: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references: {model: 'Organizacoes', key: 'id_organizacoes'}
      },
      cod_sexo: {
        type: Sequelize.INTEGER,
      },
      cod_perfil: {
        type: Sequelize.INTEGER,
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