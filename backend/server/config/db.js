const mongoose = require('mongoose');
require('dotenv').config();

const { MONGO_PASSWORD, NODE_ENV} = process.env;

const MONGO_URL = `mongodb+srv://dbUser:${MONGO_PASSWORD}@cluster0-igs2x.mongodb.net/test?retryWrites=true&w=majority`;
module.exports = () => {

    const connect = () => {
        if (NODE_ENV !== 'production') {
            mongoose.set('debug', true);
        }
        mongoose.connect(MONGO_URL,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        }, (error) => {
            if (error) {
                console.log('Mongodb connection error', error);
            } else {
                console.log('Mongodb connection succeed');
            }
        });

    };
    connect();

    mongoose.connection.on('error', (error) => {
        console.error('mongodb connection error', error);
    });

    mongoose.connection.on('disconnected', () => {
        console.error('mongodb has been disconnected. trying to reconnect...');
        connect();
    });

    // bring schema
}
