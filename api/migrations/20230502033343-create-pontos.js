'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Pontos', {
      id_pontos: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      situacao: {
        allowNull: false,
        type: Sequelize.STRING
      },
      hora_ponto: {
        allowNull: false,
        type: Sequelize.DATE
      },
      descricao: {
        allowNull: false,
        type: Sequelize.STRING
      },
      id_usuarios: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'Usuarios', key: 'id_usuarios'}
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
    await queryInterface.dropTable('Pontos');
  }
};