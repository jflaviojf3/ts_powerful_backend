const database = require('../models')

class Services {
    constructor(nomeDoModelo){
        this.nomeDoModelo = nomeDoModelo
    }

    async pegaTodosOsRegistros(){
        return database[this.nomeDoModelo].findAll()
    }

    async pegaUmRegistro(where){
        return database[this.nomeDoModelo].findOne(where)
    }

    async criaUmRegistro(dados){
        return database[this.nomeDoModelo].create(dados)
    }

    async atualizaUmRegistro(dadosAtualizados, where, transacao={}){
        return database[this.nomeDoModelo]
        .update(dadosAtualizados, where, transacao)
    }

    async deletaUmRegistro(where){
        return database[this.nomeDoModelo].destroy(where)
    }
}

module.exports = Services