'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tabelaGenerica', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idPropriedade: {
        type: Sequelize.INTEGER
      },
      descricaoPropriedade: {
        type: Sequelize.STRING
      },
      codPropriedade: {
        type: Sequelize.INTEGER
      },
      descricaoCodigo: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('tabelaGenerica');
  }
};