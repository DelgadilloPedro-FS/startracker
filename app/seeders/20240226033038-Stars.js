"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert( "Stars",
      [
        {
          name: "Sun",
          size: 1391600, 
          description:
            "Our star, a yellow dwarf at the center of the solar system",
            galaxyId: 1,
          createdAt,
          updatedAt,
        },
        {
          name: "Proxima Centauri",
          size: 705,
          description: "The closest star to the Sun, a red dwarf",
          galaxyId: 1,
          createdAt,
          updatedAt,
        },
      ],{});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Stars', null, {});
  },
};
