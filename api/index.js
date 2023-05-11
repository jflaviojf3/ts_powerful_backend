const express = require('express');
require('dotenv').config()
const routes = require ('./routes/v1')

const app = express();
const port = process.env.PORT


routes(app)

app.listen(port, () => console.log(`servidor está rodando na porta ${port}`))

module.exports = app