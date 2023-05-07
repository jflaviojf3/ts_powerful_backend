'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Equipes', {
      id_equipes: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        allowNull: false,
        type: Sequelize.STRING
      },
      descricao: {
        type: Sequelize.STRING
      },
      data_inicio: {
        allowNull: false,
        type: Sequelize.DATEONLY,
      },
      data_fim: {
        type: Sequelize.DATEONLY
      },
      id_organizacoes: {
        allowNull: false,
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
    await queryInterface.dropTable('Equipes');
  }
};