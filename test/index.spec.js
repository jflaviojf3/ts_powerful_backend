const request = require ("supertest")
const app = require ('../api/server.js')

 describe ('Teste para testar instalação do Jest', ()=>{
    it('Só testando a verdade', ()=>{
        expect(true).toBe(true)
    })
 })


 describe ('Testando os Get', ()=>{

    it('Test Get All Users', async ()=>{
        const res = await request(app).get('/v1/usuarios')

        expect(res.statusCode).toEqual(200)
        expect(res.body[0]).toHaveProperty('id_usuarios')
    })

 })