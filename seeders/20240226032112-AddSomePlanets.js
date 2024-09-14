'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Planets', [{
      
        name: 'Earth',
        size: 12756,
        description: 'The third planet from the Sun and home to humans',
        createdAt:new Date(),
        updatedAt:new Date(),
      },
      {
        name: 'Mars',
        size: 6779,
        description: 'The fourth planet from the Sun, known as the Red Planet',
        createdAt:new Date(),
        updatedAt:new Date(),
      },
      {
        name: 'Jupiter',
        size: 142984,
        description: 'The largest planet in the solar system, a gas giant',
        createdAt:new Date(),
        updatedAt:new Date(),
      },
      {
        name: 'Saturn',
        size: 120536,
        description: 'The second-largest planet, known for its rings',
        createdAt:new Date(),
        updatedAt:new Date(),
      },
      {
        name: 'Mercury',
        size: 4880,
        description: 'The smallest planet in the solar system, closest to the Sun',
        createdAt:new Date(),
        updatedAt:new Date(),
      },
      {
        name: 'Venus',
        size: 12104,
        description: 'The hottest planet in the solar system, often called Earths twin',
        createdAt:new Date(),
        updatedAt:new Date(),
      },
      {
        name: 'Neptune',
        size: 49528,
        description: 'The farthest planet from the Sun, an icy gas giant',
        createdAt:new Date(),
        updatedAt:new Date(),
      }],{});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     */
     await queryInterface.bulkDelete('Planets', null, {});
    
  }
};
