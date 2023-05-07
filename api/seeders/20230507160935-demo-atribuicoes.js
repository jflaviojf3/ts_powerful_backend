'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Atribuicoes",
      [
        {
          descricao: "Levantamento de requisitos",
          ativo: 1,
          id_cargos: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          descricao: "Avaliação dos codigos",
          ativo: 1,
          id_cargos: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          descricao: "Contato com os clientes",
          ativo: 1,
          id_cargos: 1,
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
