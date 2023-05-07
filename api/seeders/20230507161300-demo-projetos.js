'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Projetos",
      [
        {
          nome: "Desenvolvimento Backend",
          data_inicio: "2023-05-01",
          data_fim: null,
          duracao_prevista: 3,
          id_organizacoes: 1,
          id_equipes: 1,
          id_clientes: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Desenvolvimento frontend",
          data_inicio: "2023-05-08",
          data_fim: null,
          duracao_prevista: 2,
          id_organizacoes: 1,
          id_equipes: 1,
          id_clientes: 1,
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
