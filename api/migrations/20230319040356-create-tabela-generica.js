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
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      descricao_propriedade: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      cod_propriedade: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      descricao_codigo: {
        allowNull: false,
        type: Sequelize.STRING,
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
    await queryInterface.dropTable('tabelaGenerica');
  }
};