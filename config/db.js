const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const connectToMongo = () => {
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log('Conectado ao MongoDB');
    }).catch(err => {
        console.error('Erro ao conectar ao MongoDB', err);
    });
};

module.exports = connectToMongo;
