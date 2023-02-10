module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('deliverys_destinations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      departureCoordenate: {
        type: Sequelize.STRING,
        allowNull: true,
        field: 'departure_coordenate'
      },
      destinyCoordenate: {
        type: Sequelize.STRING,
        allowNull: true,
        field: 'destiny_coordenate'
      },
      departureName: {
        type: Sequelize.STRING,
        defaultValue: null,
        allowNull: true,
        field: 'departure_name'
      },  
      destinyName: {
        type: Sequelize.STRING,
        defaultValue: null,
        allowNull: true,
        field: 'destiny_name'
      },
      deliveryId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        onDelete: 'cascade',
        onUpdate: 'cascade',
        references: {
          model: 'deliverys',
          key: 'id'
        },
        field: 'delivery_id'
      }
    })
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('deliverys_destinations')
  }
}
