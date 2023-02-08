module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('deliverysDestinations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      departure: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      destiny:  {
        type: Sequelize.STRING,
        allowNull: true,
      },
      deliveryId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        onDelete: 'cascade',
        onUpdate: 'cascade',
        references: {
          model: 'deliverys',
          key: 'id',
        },
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('deliverysDestinations');
  },
};
