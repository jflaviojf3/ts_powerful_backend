const database = require('../models')

class ParametroController {
    static async pegaTodosParametros(req, res){
        try {
            const todosParametros = await database.tabelaGenerica.findAll()
            return res.status(200).json(todosParametros)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = ParametroController