const database = require('../models')

class UsuarioController {
    static async pegaTodosUsuarios(req, res){
        try {
            const todosUsuarios = await database.Usuarios.findAll()
            return res.status(200).json(todosUsuarios)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async pegaUmUsuario(req, res){
        const {id} = req.params
        try {
            const umUsuario = await database.Usuarios.findOne({ where: {id_usuarios:Number(id)}})
            return res.status(200).json(umUsuario)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async criaUsuario(req, res){
        const novoUsuario = req.body
        try {
            const umNovoUsuarioCriado = await database.Usuarios.create(novoUsuario)
            return res.status(200).json(umNovoUsuarioCriado)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async atualizaUsuario(req, res){
        const {id} = req.params
        const atualizaUsuario = req.body
        try {
            await database.Usuarios.update(atualizaUsuario, { where: {id_usuarios:Number(id)}})
            const umUsuarioAtualizado = await database.Usuarios.findOne({ where: {id_usuarios:Number(id)}})
            return res.status(200).json(umUsuarioAtualizado)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async deletaUsuario(req, res){
        const {id} = req.params
        try {
            await database.Usuarios.destroy({ where: {id_usuarios:Number(id)}})
            return res.status(200).json({mensagem: `id ${id} deletado`})
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = UsuarioController