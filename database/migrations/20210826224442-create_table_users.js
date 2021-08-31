'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', { 
      id: { 
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
      },
      first_name: { 
        type: Sequelize.STRING,
        allowNull: false,
      },
      last_name: { 
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: { 
        type: Sequelize.STRING,
        allowNull: false,
      },
      password: { 
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: { 
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false,
      },
      updated_at: { 
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false,
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};
