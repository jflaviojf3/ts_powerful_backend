const database = require('../models')

class OrganizacaoController {
    static async pegaTodosOrganizacao(req, res){
        try {
            const todosOrganizacao = await database.Organizacoes.findAll()
            return res.status(200).json(todosOrganizacao)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    
    static async pegaUmOrganizacao(req, res){
        const {id} = req.params
        try {
            const umOrganizacao = await database.Organizacoes.findOne({ where: {id_organizacoes:Number(id)}})
            return res.status(200).json(umOrganizacao)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async criaOrganizacao(req, res){
        const novoOrganizacao = req.body
        try {
            const umNovoOrganizacaoCriado = await database.Organizacoes.create(novoOrganizacao)
            return res.status(200).json(umNovoOrganizacaoCriado)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async atualizaOrganizacao(req, res){
        const {id} = req.params
        const atualizaOrganizacao = req.body
        try {
            await database.Organizacoes.update(atualizaOrganizacao, { where: {id_organizacoes:Number(id)}})
            const umOrganizacaoAtualizado = await database.Organizacoes.findOne({ where: {id_organizacoes:Number(id)}})
            return res.status(200).json(umOrganizacaoAtualizado)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async deletaOrganizacao(req, res){
        const {id} = req.params
        try {
            await database.Organizacoes.destroy({ where: {id_organizacoes:Number(id)}})
            return res.status(200).json({mensagem: `id ${id} deletado`})
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = OrganizacaoController