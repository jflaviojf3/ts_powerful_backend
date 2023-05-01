const bodyParser = require('body-parser')
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../swagger.json');
const usuarios = require('./usuariosRoute')
const parametros = require('./parametrosRoute')


module.exports = app => {
    app.use(bodyParser.json())
    app.use('/v1/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    app.use(usuarios)
    app.use(parametros)

    app.get('/', (req, res) => res.redirect('/v1/api-docs'))
    
    app.get('/terms', (req, res) => {
        res.send('Termos de Serviço')
    })
}