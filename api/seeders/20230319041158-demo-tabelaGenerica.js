"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "tabelaGenerica",
      [
        {
          id_propriedade: 1,
          descricao_propriedade: "Sexo",
          cod_propriedade: 1,
          descricao_codigo: "Masculino",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_propriedade: 1,
          descricao_propriedade: "Sexo",
          cod_propriedade: 2,
          descricao_codigo: "Feminino",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_propriedade: 2,
          descricao_propriedade: "Perfil",
          cod_propriedade: 1,
          descricao_codigo: "Usuário",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_propriedade: 2,
          descricao_propriedade: "Perfil",
          cod_propriedade: 2,
          descricao_codigo: "Funcionário",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_propriedade: 2,
          descricao_propriedade: "Perfil",
          cod_propriedade: 3,
          descricao_codigo: "Gerente",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_propriedade: 2,
          descricao_propriedade: "Perfil",
          cod_propriedade: 4,
          descricao_codigo: "Adm. Sistema",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_propriedade: 3,
          descricao_propriedade: "Categoria",
          cod_propriedade: 1,
          descricao_codigo: "Estágio",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_propriedade: 3,
          descricao_propriedade: "Categoria",
          cod_propriedade: 2,
          descricao_codigo: "Júnior",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_propriedade: 3,
          descricao_propriedade: "Categoria",
          cod_propriedade: 3,
          descricao_codigo: "Pleno",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_propriedade: 3,
          descricao_propriedade: "Categoria",
          cod_propriedade: 4,
          descricao_codigo: "Sênior",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_propriedade: 4,
          descricao_propriedade: "Prioridade",
          cod_propriedade: 1,
          descricao_codigo: "Nenhuma",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_propriedade: 4,
          descricao_propriedade: "Prioridade",
          cod_propriedade: 2,
          descricao_codigo: "Baixa",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_propriedade: 4,
          descricao_propriedade: "Prioridade",
          cod_propriedade: 3,
          descricao_codigo: "Media",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_propriedade: 4,
          descricao_propriedade: "Prioridade",
          cod_propriedade: 4,
          descricao_codigo: "Alta",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_propriedade: 4,
          descricao_propriedade: "Prioridade",
          cod_propriedade: 5,
          descricao_codigo: "Urgente",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("tabelaGenerica", null, {});
  },
};
