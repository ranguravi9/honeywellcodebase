'use strict';
const bcrypt = require('bcrypt');
const password = '123456'
const hash = bcrypt.hashSync(password, 10);
module.exports = {
  up: async (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('users', [
          {
              firstName: 'Ravi',
              lastName: 'Teja',
              email: 'ravirangu341@gmail.com',
              userType: 1,
              isActive: 1,
              mobile: '9866107275',
              password: hash,
              createdAt: new Date(),
              updatedAt: new Date(),
          },
          {
              firstName: 'Sai',
              lastName: 'Teja',
              email: 'sai@gmail.com',
              userType: 2,
              isActive: 1,
              mobile: '9963291910',
              password: hash,
              createdAt: new Date(),
              updatedAt: new Date(),
          }
      ])
  },

  down: async (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('users', null, {})
  }
};
