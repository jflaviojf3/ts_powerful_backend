'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Tarefas",
      [
        {
          entrada : 1,
          descricao : "Fazendo atividade do backend",
          data_inicio : "2023-05-07 15:55:35",
          data_fim : "2023-05-07 16:00:23",
          id_usuarios : 1,
          id_projetos : 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_tarefas: 1,
          entrada : 2,
          descricao : "Refazendo models e finalizando seeds",
          data_inicio : "2023-05-07 16:24:35",
          data_fim : "2023-05-07 16:28:23",
          id_usuarios : 1,
          id_projetos : 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          entrada : 1,
          descricao : "Finalizando seeds e iniciando endpoint",
          data_inicio : "2023-05-07 16:30:47",
          data_fim :  null,
          id_usuarios : 1,
          id_projetos : 1,
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
