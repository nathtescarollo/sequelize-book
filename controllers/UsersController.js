const usersModel = require('../models/users');

exports.getAllUsers = () => usersModel.getAllUsers();

exports.addBookToUser = (id, book) => usersModel.addBookToUser(id, book);

exports.addAddressToUser = (id, address) => usersModel.addAddressToUser(id, address);
