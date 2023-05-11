'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Tarefas', {
      id_tarefas: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      entrada: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      descricao: {
        type: Sequelize.STRING
      },
      data_inicio: {
        allowNull: false,
        type: Sequelize.DATE
      },
      data_fim: {
        type: Sequelize.DATE
      },
      id_usuarios: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'Usuarios', key: 'id_usuarios'}
      },
      id_projetos: {
        type: Sequelize.INTEGER,
        references: {model: 'Projetos', key: 'id_projetos'}
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Tarefas');
  }
};