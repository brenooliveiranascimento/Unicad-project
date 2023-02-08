module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'deliverys_destinations',
      [
        {
          id: 1,
          departure: '-15.038343158420444, -41.93284629590619',
          destiny: '43.7357430958858, -79.37240494303681',
          delivery_id: 1
        }
      ],
      {},
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('deliverys_destinations', null, {});
  },
};
