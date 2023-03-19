'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('tabelaGenerica', [{
      idPropriedade: 1,
      descricaoPropriedade: "Sexo",
      codPropriedade: 1,
      descricaoCodigo: "Masculino",
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      idPropriedade: 1,
      descricaoPropriedade: "Sexo",
      codPropriedade: 2,
      descricaoCodigo: "Feminino",
      createdAt: new Date(),
      updatedAt: new Date()
     }], {});

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tabelaGenerica', null, {});

  }
};
