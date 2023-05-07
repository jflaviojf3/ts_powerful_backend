'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Clientes', 
    'descricao',
    {
      type: DataTypes.STRING
    });
    await queryInterface.addColumn('Clientes', 
    'cod_prioridade',
    {
      allowNull: false,
      type: DataTypes.INTEGER
    });
  },

  async down (queryInterface, Sequelize) {

  }
};
