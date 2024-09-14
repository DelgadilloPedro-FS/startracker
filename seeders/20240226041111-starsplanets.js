'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('StarsPlanets', [{
      starId: 1,
      planetId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      starId: 1,
      planetId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      starId: 1,
      planetId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      starId: 1,
      planetId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      starId: 1,
      planetId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      starId: 1,
      planetId: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      starId: 1,
      planetId: 7,
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('StarsPlanets', null, {});
  }
};
