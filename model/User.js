const mongoose = require('mongoose');

// Definindo o esquema de um usuário (podendo incluir mais campos conforme necessário)
const userSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    email: { type: String, required: true, unique: true }
});

// Criando o modelo de usuário e vinculando à coleção 'users' no banco de dados 'Treinees'
const User = mongoose.model('User', userSchema, 'users'); // A terceira string é a coleção 'users'

module.exports = User;
