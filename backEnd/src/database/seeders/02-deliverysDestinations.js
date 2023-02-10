module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'deliverys_destinations',
      [
        {
          id: 1,
          departure_coordenate: '-15.038343158420444, -41.93284629590619',
          destiny_coordenate: '43.7357430958858, -79.37240494303681',
          departure_name: 'asdawdw',
          destiny_name: 'awdwadwa',
          delivery_id: 1
        }
      ],
      {}
    )
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('deliverys_destinations', null, {})
  }
}
