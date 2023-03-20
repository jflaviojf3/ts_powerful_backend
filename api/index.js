const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
const port = 3000

app.get('/v1', (req, res) => {
    res.send('ApiREST - TS Powerful')
})

app.post('/v1/usuario', (req, res) => {
    res.send('Retornar pagina de usuario')
})

app.get('/v1/usuario/:id', (req, res) => {
    res.send('Retornar pagina com 1 usuario')
})

app.get('/terms', (req, res) => {
    res.send('Termos de Serviço')
})

app.listen(port, () => console.log(`servidor está rodando na porta ${port}`))