const { User } = require('../database/models');

exports.getAllUsers = () => User.findAll({ include: [ 'books', 'addresses' ] });

exports.addBookToUser = async (id, book) => {
    // precisa dar await para pegar o resultado da promise
    // e para que o metodo especial da relacao - createBook - ja tenha sido 
    // criado pelo sequelize em tempo de execucao
    const user = await User.findByPk(id);
    const returnedBook = user.createBook(book);
    return returnedBook;
};

exports.addAddressToUser = async (id, address) => {
    const user = await User.findByPk(id);
    const returnedAddress = user.createAddress(address);
    return returnedAddress;
};