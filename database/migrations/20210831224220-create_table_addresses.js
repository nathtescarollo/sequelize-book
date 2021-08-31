'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('addresses', { 
      id: { 
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
      },
      street: { 
        type: Sequelize.STRING,
        allowNull: false,
      },
      street_number: { 
        type: Sequelize.STRING,
        allowNull: false,
      },
      neighborhood: { 
        type: Sequelize.STRING,
        allowNull: false,
      },
      city: { 
        type: Sequelize.STRING,
        allowNull: false,
      },
      state: { 
        type: Sequelize.CHAR(2),
        allowNull: false,
      },
      country: { 
        type: Sequelize.STRING,
        allowNull: false,
      },
      zip_code: { 
        type: Sequelize.CHAR(8),
        allowNull: false,
      },
      user_id: { 
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        references: { 
          model: 'users',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
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
    await queryInterface.dropTable('addresses');
  }
};
