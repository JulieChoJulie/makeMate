const express = require('express');
const dbConfig = require('./config/db');
require('dotenv').config();

dbConfig();

const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, err => {
    if (err) {
        console.error(err);
    } else {
        console.log(`App is listening on ${PORT} `)
    }
});
