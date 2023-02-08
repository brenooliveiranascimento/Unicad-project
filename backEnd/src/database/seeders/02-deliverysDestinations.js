module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'deliverysDestinations',
      [
        {
          id: 1,
          departure: '-15.038343158420444, -41.93284629590619',
          destiny: '43.7357430958858, -79.37240494303681',
          deliveryId: 1
        }
      ],
      {},
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('deliverysDestinations', null, {});
  },
};
