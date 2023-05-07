'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Equipes",
      [
        {
          nome: "Desenvolvimento FullStack",
          descricao: "Analise, codificação, teste, implantação e treinamento do sistema para o cliente",
          data_inicio: "2023-05-01",
          id_organizacoes: 1,
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
