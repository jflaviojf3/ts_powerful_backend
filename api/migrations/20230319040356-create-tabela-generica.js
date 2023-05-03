'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tabelaGenerica', {
      id_tabGenerica: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_propriedade: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      descricao_propriedade: {
        type: Sequelize.STRING
      },
      cod_propriedade: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      descricao_codigo: {
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