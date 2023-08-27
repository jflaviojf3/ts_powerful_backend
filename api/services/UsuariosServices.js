const Services = require('./Services')
const database = require('../models')

class UsuariosServices extends Services {
    constructor(){
        super('Usuarios')
    }
    
    //Metodos especificos
    async pegaUsuariosAtivos (where = {}){
        return database[this.nomeDoModelo].findAll({where: {...where}})
    }

    async pegaTodosOsUsuarios(where = {}){
        return database[this.nomeDoModelo]
        //.scope('todos')
        .findAll({where: {...where}})
    }

    async atualizaUmUsuario(dadosAtualizados, where, transacao={}){
        return database[this.nomeDoModelo]
        .update(dadosAtualizados, {where: { id_usuarios: where }}, transacao)
    }

    async pegaUmUsuario(where){
        return database[this.nomeDoModelo].findOne({
            where: { id_usuarios: where },})
    }

    async criaUsuario(dados){
        return database[this.nomeDoModelo].create(dados)
    }

    async deletaUsuario(where){
        return database[this.nomeDoModelo].destroy({
            where: { id_usuarios: where },
          })
    }

}

module.exports = UsuariosServices