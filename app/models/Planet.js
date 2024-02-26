module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('Planets', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        PlanetName: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        Size: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        Description: {
          type: Sequelize.TEXT,
        },
      });
    },
    down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('Planets');
    },
  };
  