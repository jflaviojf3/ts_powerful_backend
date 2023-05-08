'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Cargos",
      [
        {
          nome: "Analista de Sistema",
          descricao_cargo: "Cargo necessário para levantamento de requisitos e demais atividades",
          cod_categoria: 2,
          data_inicio: "2023-05-01",
          data_fim: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
  }
};
