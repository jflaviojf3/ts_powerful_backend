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
     },     
     {
      idPropriedade: 2,
      descricaoPropriedade: "Perfil",
      codPropriedade: 1,
      descricaoCodigo: "Usuário",
      createdAt: new Date(),
      updatedAt: new Date()
     },     
     {
      idPropriedade: 2,
      descricaoPropriedade: "Perfil",
      codPropriedade: 2,
      descricaoCodigo: "Funcionário",
      createdAt: new Date(),
      updatedAt: new Date()
     },     
     {
      idPropriedade: 2,
      descricaoPropriedade: "Perfil",
      codPropriedade: 3,
      descricaoCodigo: "Gerente",
      createdAt: new Date(),
      updatedAt: new Date()
     },     
     {
      idPropriedade: 2,
      descricaoPropriedade: "Perfil",
      codPropriedade: 4,
      descricaoCodigo: "Adm. Sistema",
      createdAt: new Date(),
      updatedAt: new Date()
     },     
     {
      idPropriedade: 3,
      descricaoPropriedade: "Categoria",
      codPropriedade: 1,
      descricaoCodigo: "Adm. Sistema",
      createdAt: new Date(),
      updatedAt: new Date()
     }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tabelaGenerica', null, {});

  }
};
