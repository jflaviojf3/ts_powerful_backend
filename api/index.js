const app = require ('./server')

const port = process.env.PORT
app.listen(port, () => console.log(`servidor está rodando na porta ${port}`))