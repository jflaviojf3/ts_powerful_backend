'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Objetivos",
      [
        {
          descricao: "Finalização Models",
          marcado: 1,
          id_projetos: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          descricao: "Finalização dos CRUD e endpoints",
          marcado: 1,
          id_projetos: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          descricao: "Finalizando Autenticação",
          marcado: 0,
          id_projetos: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          descricao: "Finalizando Teste Automatizados",
          marcado: 0,
          id_projetos: 1,
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
