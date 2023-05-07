'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Auditorias",
      [
        {
          descricao : "Tarefa Finalizada",
          data_hora_inicio : "2023-05-07 15:55:35",
          data_hora_fim : "2023-05-07 16:00:23",
          id_tarefas : 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          descricao : "Tarefa Editada",
          data_hora_inicio : "2023-05-07 15:55:35",
          data_hora_fim : "2023-05-07 16:07:23",
          id_tarefas : 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          descricao : "Ponto Finalizado",
          data_hora_inicio : "2023-05-07 09:55:00",
          id_pontos : 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          descricao : "Ponto Alterado",
          data_hora_inicio : "2023-05-07 10:30:00",
          id_pontos : 1,
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
