const Services = require('./Services')
const database = require('../models')
const { compare } = require('bcryptjs')
const { sign } = require('jsonwebtoken')
const jsonScret = require('../config/jsonSecret')

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
        
          console.log( usuario)
          if (!usuario){
            throw new Error('Usuario não cadastrado')
          }

          const senhaConfere = await compare(dados.senha, usuario.senha)

          if (!senhaConfere){
            throw new Error('Usuario ou senha invalido')
          }

          const acessToken = sign({
            id: usuario.id_usuarios,
            email: usuario.email
          }, jsonScret.secret, {
            expiresIn: 86400
          })
        
        return { acessToken } 
    }

}

module.exports = AuthServices