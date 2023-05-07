'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Cargos', 
    'nome',
    {
      allowNull: false,
      type: DataTypes.STRING
    });
  },

  async down (queryInterface, Sequelize) {

  }
};
