module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'deliverys',
      [
        {
          id: 1,
          client: 'Breno Nascimento',
          delivery_date: new Date(),
        }
      ],
      {},
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('deliverys', null, {});
  },
};
