module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      client: {
        allowNull: false,
        type: Sequelize.STRING(30),
      },
      deliveryDate: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      departure: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      destiny:  {
        type: Sequelize.STRING,
        allowNull: true,
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('users');
  },
};
