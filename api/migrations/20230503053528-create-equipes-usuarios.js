'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('EquipesUsuarios', {
      id_equipes_usuarios: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_equipes: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references: {model: 'Equipes', key: 'id_equipes'}
      },
      id_usuarios: {
        allowNull: true,
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
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('EquipesUsuarios');
  }
};