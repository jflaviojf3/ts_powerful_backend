'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "EquipesUsuarios",
      [
        {
          id_equipes: 1,
          id_usuarios: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_equipes: 1,
          id_usuarios: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
