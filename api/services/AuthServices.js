const Services = require('./Services')
const database = require('../models')
const { compare } = require('bcryptjs')
const { sign } = require('jsonwebtoken')

class AuthServices extends Services {
    constructor(){
        super('Usuarios')
    }
    
    //Metodos especificos
    async pegaUmUsuarioLogin(dados){
        const usuario = await database[this.nomeDoModelo].findOne({
            attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
            where: { email: dados.email },
          })
          
          if (!usuario){
            throw new Error('Usuario não cadastrado')
          }

          const senhaConfere = await compare(dados.senha, usuario.senha)

          if (!senhaConfere){
            throw new Error('Usuario ou senha invalido')
          }

          const token = sign({
            id: usuario.id_usuarios,
            email: usuario.email
          }, process.env.JSONSECRET_AUTH, {
            expiresIn: 86400
          })
        
        return { token } 
    }

}

module.exports = AuthServices