module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'deliverys',
      [
        {
          id: 1,
          client: 'Breno Nascimento',
          deliveryDate: new Date(),
        }
      ],
      {},
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('deliverys', null, {});
  },
};
