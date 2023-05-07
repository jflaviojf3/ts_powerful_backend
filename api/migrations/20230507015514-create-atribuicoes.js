'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Atribuicoes', {
      id_atribuicoes: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      descricao: {
        type: Sequelize.STRING
      },
      ativo: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      id_cargos: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references: {model: 'Cargos', key: 'id_cargos'}
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
    await queryInterface.dropTable('Atribuicoes');
  }
};