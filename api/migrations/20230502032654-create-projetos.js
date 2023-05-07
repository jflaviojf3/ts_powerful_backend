'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Projetos', {
      id_projetos: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      data_inicio: {
        allowNull: false,
        type: Sequelize.DATEONLY
      },
      data_fim: {
        type: Sequelize.DATEONLY
      },
      duracao_prevista: {
        type: Sequelize.INTEGER
      },
      id_organizacoes: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'Organizacoes', key: 'id_organizacoes'}
      },
      id_clientes: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'Clientes', key: 'id_clientes'}
      },
      id_equipes: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'Equipes', key: 'id_equipes'}
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
    await queryInterface.dropTable('Projetos');
  }
};