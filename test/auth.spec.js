const request = require ("supertest")
const app = require ('../api/server.js')

describe('Testes dos endpoints de autenticação', ()=>{

    it('Teste de login utilizando dados corretos, deve retornar 200', async ()=>{
        const res = await request(app)
        .post('/v1/auth')
        .send({'email':'jflaviojf3@gmail.com', 'senha':'admin12345678'})

        expect(res.statusCode).toEqual(200)
        expect(res.body).toMatchObject( expect.objectContaining({
            "acessToken": expect.any(String),
          }),
        );
    })

    it('Teste de login utilizando dados incorretos de senha, deve retornar 401', async ()=>{
        const res = await request(app)
        .post('/v1/auth')
        .send({'email':'jflaviojf3@gmail.com', 'senha':'admin'})

        expect(res.statusCode).toEqual(401)
        expect(res.body.message).toEqual( 'Usuario ou senha invalido' );
    })

    it('Teste de login utilizando dados incorretos de email, deve retornar 401', async ()=>{
        const res = await request(app)
        .post('/v1/auth')
        .send({'email':'jflaviojf3@hotmail.com', 'senha':'admin12345678'})

        expect(res.statusCode).toEqual(401)
        expect(res.body.message).toEqual( 'Usuario não cadastrado' );
    })
})