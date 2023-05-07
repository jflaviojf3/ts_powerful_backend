'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Clientes",
      [
        {
          nome: "PUC Minas Virtual",
          descricao: "Analise, codificação, teste, implantação e treinamento do sistema para o cliente",
          data_inicio: "2023-05-01",
          data_fim: "2023-05-21",
          email: "atendimento@pucminas.com.br",
          cod_prioridade: 5,
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
