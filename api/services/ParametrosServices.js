const Services = require('./Services')
const database = require('../models')

class ParametrosServices extends Services {
    constructor(){
        super('tabelaGenerica')
    }
    
    //Metodos especificos
    async pegaUmParametro (where = {}){
        return database[this.nomeDoModelo].findByPk( where)
    }

    async pegaTodasPropriedadeParametro(where = {}){
        return database[this.nomeDoModelo]
        .findAll({ where: { id_propriedade: where }})
    }

    async pegaTodasPropriedadeParametroPermissao( where = {}){
        return database[this.nomeDoModelo]
        .findAll({ attributes: ["cod_propriedade", "descricao_codigo"], where: { id_propriedade: where }})
    }

    async atualizaUmParametro(dadosAtualizados, where, transacao={}){
        return database[this.nomeDoModelo]
        .update(dadosAtualizados, { where: { id_tabGenerica: where }}, transacao)
    }

    async criaParametro(dados){
        const cod_parametro = await this.pegaUmRegistro({ where: {
            cod_propriedade: dados.cod_propriedade,
            id_propriedade: dados.id_propriedade
        }})

        if (cod_parametro){
            throw new Error('Codigo do Parametro Existe')
        }

        return  database[this.nomeDoModelo].create(dados)
    }

    async deletaParametro(where){
        return database[this.nomeDoModelo].destroy({
            where: { id_tabGenerica: where },
          })
    }

}

module.exports = ParametrosServices