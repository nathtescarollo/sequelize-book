module.exports = (sequelize, DataTypes) => {
    const Book = sequelize.define('Book', { 
        title: { 
          type: DataTypes.STRING,
          allowNull: false,
        },
        author: { 
          type: DataTypes.STRING,
          allowNull: false,
        },
        price: { 
          type: DataTypes.DOUBLE,
          allowNull: false,
        }
      }
    );

    Book.associate = models => {
        Book.belongsToMany(models.User, {
          through: 'user_books',
          as: 'users'
        })
    };  

    return Book;
};