'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('orders', [
          {
              createdLatitude: '13.866090',
              createdLongitude: '78.416931',
              orderLatitude: '17.444708',
              orderLongitude: '78.466377',
              orderStatus: 'placed',
              createdBy: 1,
              pickedBy: 2,
              createdAt: new Date(),
              updatedAt: new Date(),
          }
      ])
  },

  down: async (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('orders', null, {})
  }
};
