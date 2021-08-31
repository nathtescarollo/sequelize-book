module.exports = (DataTypes, DataTypes) => {
    const Address = DataTypes.define('Address', { 
        street: { 
          type: DataTypes.STRING,
          allowNull: false,
        },
        street_number: { 
          type: DataTypes.STRING,
          allowNull: false,
        },
        neighborhood: { 
          type: DataTypes.STRING,
          allowNull: false,
        },
        city: { 
          type: DataTypes.STRING,
          allowNull: false,
        },
        state: { 
          type: DataTypes.CHAR(2),
          allowNull: false,
        },
        country: { 
          type: DataTypes.STRING,
          allowNull: false,
        },
        zip_code: { 
          type: DataTypes.CHAR(8),
          allowNull: false,
        },
        user_id: { 
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
        }
      }
    );

    Address.associate = models => {
        Address.belongsTo(models.User, {
            foreignKey: 'user_id',
            as: 'user'
        })
    };  

    return Address;
};