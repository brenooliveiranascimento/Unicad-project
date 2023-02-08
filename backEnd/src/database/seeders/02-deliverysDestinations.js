module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'deliverysDestinations',
      [
      ],
      {},
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('deliverysDestinations', null, {});
  },
};
