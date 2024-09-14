'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('planets', 'extension', {
      type: Sequelize.STRING,
      allowNull: true,
    });
    await queryInterface.addColumn('stars', 'extension', {
      type: Sequelize.STRING,
      allowNull: true,
    });
    await queryInterface.addColumn('galaxies', 'extension', {
      type: Sequelize.STRING,
      allowNull: true,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('planets', 'extension');
    await queryInterface.removeColumn('stars', 'extension');
    await queryInterface.removeColumn('galaxies', 'extension');
  },
};