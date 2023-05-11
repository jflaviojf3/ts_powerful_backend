'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Auditorias', {
      id_auditorias: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      descricao: {
        type: Sequelize.STRING
      },
      data_hora_inicio: {
        allowNull: false,
        type: Sequelize.DATE
      },
      data_hora_fim: {
        type: Sequelize.DATE
      },
      id_tarefas: {
        type: Sequelize.INTEGER,
        references: {model: 'Tarefas', key: 'id_tarefas'}
      },
      id_pontos: {
        type: Sequelize.INTEGER,
        references: {model: 'Pontos', key: 'id_pontos'}
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
    await queryInterface.dropTable('Auditorias');
  }
};