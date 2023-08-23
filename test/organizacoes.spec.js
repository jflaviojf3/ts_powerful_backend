const request = require ("supertest")
const app = require ('../api/server.js')

describe.skip('Testes dos endpoints de organizações', ()=>{

    var id_organizacoes_criado = ''

    it('Teste para consultar uma organização, deve retornar 200', async ()=>{
        const res = await request(app)
        .get(`/v1/organizacoes/1`)

        expect(res.statusCode).toEqual(200)
        expect(res.body.nome).toEqual("JFPLtda")
        expect(res.body).toMatchObject( expect.objectContaining({
            "id_organizacoes": expect.any(Number),
            "nome": expect.any(String),
            "createdAt": expect.any(String),
            "updatedAt": expect.any(String),
          }),
        );
    })

    it('Teste para criar novas organizações, deve retornar 200', async ()=>{
        const res = await request(app)
        .post('/v1/organizacoes')
        .send({
            "nome": "Empresa Teste",
        })

        expect(res.statusCode).toEqual(200)
        expect(res.body.nome).toEqual("Empresa Teste")
        expect(res.body).toMatchObject( expect.objectContaining({
            "id_organizacoes": expect.any(Number),
            "nome": expect.any(String),
            "createdAt": expect.any(String),
            "updatedAt": expect.any(String),
          }),
        );
        id_organizacoes_criado =  res.body.id_organizacoes;
    })

    it('Teste para consultar todas as organizações, deve retornar 200', async ()=>{
        const res = await request(app)
        .get('/v1/organizacoes')

        expect(res.statusCode).toEqual(200)
        expect(res.body).not.toHaveLength(1);
        expect(res.body[0].nome).toEqual("JFPLtda")
        expect(res.body[0]).toMatchObject( expect.objectContaining({
            "id_organizacoes": expect.any(Number),
            "nome": expect.any(String),
            "createdAt": expect.any(String),
            "updatedAt": expect.any(String),
          }),
        );
    })

    it('Teste para atualizar uma organização que foi criado, deve retornar 200', async ()=>{
        const res = await request(app)
        .put(`/v1/organizacoes/${id_organizacoes_criado}`)
        .send({
            "nome": "Empresa Teste Atualizada"
        })

        expect(res.statusCode).toEqual(200)
        expect(res.body.nome).toEqual("Empresa Teste Atualizada")
        expect(res.body).toMatchObject( expect.objectContaining({
            "id_organizacoes": expect.any(Number),
            "nome": expect.any(String),
            "createdAt": expect.any(String),
            "updatedAt": expect.any(String),
          }),
        );
    })

    it('Teste para deletar uma organização que foi atualizado, deve retornar 200', async ()=>{
        const res = await request(app)
        .del(`/v1/organizacoes/${id_organizacoes_criado}`)

        expect(res.statusCode).toEqual(200)
        expect(res.body.mensagem).toEqual(`Id Organização ${id_organizacoes_criado} deletado`)
    })

})