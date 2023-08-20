const express = require('express');
require('dotenv').config()
const routes = require ('./routes/v1')

const app = express();

routes(app)

module.exports = app