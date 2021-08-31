'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('user_books', { 
      id: { 
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
      },
      user_id: { 
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        references: { 
          model: 'users',
          key: 'id'
        }
      },
      book_id: { 
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        references: { 
          model: 'books',
          key: 'id'
        }
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
    await queryInterface.dropTable('user_books');
  }
};
