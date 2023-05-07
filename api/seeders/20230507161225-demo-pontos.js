'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Pontos",
      [
        {
          situacao: "Entrada",
          hora_ponto: "2023-05-07 10:30:00",
          descricao: "Entrada Normal",
          id_usuarios: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          situacao: "Saida Almoço",
          hora_ponto: "2023-05-07 14:16:00",
          descricao: "Saida Almoço Normal",
          id_usuarios: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          situacao: "Retorno Almoço",
          hora_ponto: "2023-05-07 15:34:00",
          descricao: "Retorno Almoço Normal",
          id_usuarios: 1,
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
