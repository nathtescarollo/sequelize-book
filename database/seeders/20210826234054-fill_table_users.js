'use strict';

const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [{
      first_name: 'Murilo',
      last_name: 'Ignacio',
      email: 'murilo@mail.com',
      password: bcrypt.hashSync('123456')
    }, {
      first_name: 'Alan',
      last_name: 'Rabelo',
      email: 'alan@mail.com',
      password: bcrypt.hashSync('123456')
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
