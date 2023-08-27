const express = require('express');
require('dotenv').config()
const routes = require ('./routes/v1')

let app = ''

if (process.env.SERVER_PROD) {
    app = process.env.SERVER_PROD
} else {
    app = express(); 
    routes(app);
}

module.exports = app