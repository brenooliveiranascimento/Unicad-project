module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('deliverys', {
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
        type: Sequelize.DATE,
        allowNull: true,
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('deliverys');
  },
};
