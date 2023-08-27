const request = require ("supertest")
const app = require ('../api/server.js')

describe('Testes dos endpoints de autenticação', ()=>{

    it('Teste de login utilizando dados corretos, deve retornar 200', async ()=>{
        const res = await request(app)
        .post('/v1/auth')
        .send({'email':'jflaviojf3@gmail.com', 'senha':'admin12345678'})

        expect(res.statusCode).toEqual(200)
        expect(res.body).toMatchObject( expect.objectContaining({
            "nome": expect.any(String),
            "sobrenome": expect.any(String),
            "email": expect.any(String),
            "ativo": expect.any(Number),
            "ddd": expect.any(Number),
            "telefone": expect.any(Number),
            "data_nascimento": expect.any(String),
            "cpf": expect.any(String),
            "descricao": expect.any(String),
            //"foto": expect.anything(),
            "cod_sexo": expect.any(Number),
            "cod_perfil": expect.any(Number),
            "id_cargos": expect.any(Number),
            "id_organizacoes": expect.any(Number)
          }),
        );
    })

    it('Teste de login utilizando dados incorretos de senha, deve retornar 401', async ()=>{
        const res = await request(app)
        .post('/v1/auth')
        .send({'email':'jflaviojf3@gmail.com', 'senha':'admin'})

        expect(res.statusCode).toEqual(401)
        expect(res.body.message).toEqual( 'Usuario ou Senha Invalido' );
    })

    it('Teste de login utilizando dados incorretos de email, deve retornar 401', async ()=>{
        const res = await request(app)
        .post('/v1/auth')
        .send({'email':'jflaviojf3@hotmail.com', 'senha':'admin12345678'})

        expect(res.statusCode).toEqual(401)
        expect(res.body.message).toEqual( 'Usuario ou Senha Invalido' );
    })
})