"use strict";

const { NOW } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Usuarios",
      [
        {
          nome: "Jessé",
          sobrenome: "Lima",
          email: "jflaviojf3@gmail.com",
          senha: "$2a$06$cLuZEdxJqIJvefdFt06rM.wAL4qUUtp5K5zTSC3ZGc29.LA5iE4q6",
          provedor: null,
          ativo: 1,
          ddd: 91,
          telefone: 999999999,
          data_nascimento: "1996-07-18",
          cpf: "01868458202",
          descricao: "Em faze de entrega de tcc, para o curso DWFS",
          foto: null,
          cod_sexo: 1,
          cod_perfil: 4,
          id_cargos: 1,
          id_organizacoes:1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Brenda",
          sobrenome: "Barros",
          email: "bbarros@gmail.com",
          senha: "$2a$06$cLuZEdxJqIJvefdFt06rM.wAL4qUUtp5K5zTSC3ZGc29.LA5iE4q6",
          provedor: null,
          ativo: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Usuarios", null, {});
  },
};
